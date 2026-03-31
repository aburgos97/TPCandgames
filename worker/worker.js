/**
 * TPC Worker — Cloudflare Worker Central
 * Maneja: D1 tpc-fifa18 (DB) + D1 tpc-club (CLUB_DB) + YouTube + Anthropic
 *
 * Bindings D1 necesarios en Cloudflare Dashboard → Worker → Settings → Bindings:
 *   DB      → tpc-fifa18   (7cff90ca-b5de-4c97-822f-435fdcf639f1)
 *   CLUB_DB → tpc-club     (5636e4aa-d013-4eaf-abd5-90207794bd0b)
 */

const ALLOWED_ORIGINS = [
  'https://thepot-club.com',
  'https://www.thepot-club.com',
  'https://tpcgames.pages.dev',
  'http://localhost',
  'http://localhost:5500',
  'http://127.0.0.1',
  'http://127.0.0.1:5500',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin':  allowed,
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-TPC-Token',
  };
}

function json(data, status = 200, origin = '') {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' }
  });
}

function err(msg, status = 400, origin = '') {
  return json({ error: msg }, status, origin);
}

async function verifyPassword(pwd, env) {
  const buf  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwd));
  const hash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  return hash === env.ADMIN_PWD_HASH;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url    = new URL(request.url);
    const path   = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    try {

      // ══════════════════════════════════════════════════════════
      // RUTAS /api/club/* — tpc-club D1
      // ══════════════════════════════════════════════════════════

      // GET /api/club/estado — carga completa para tpc-games.html
      if (path === '/api/club/estado' && request.method === 'GET') {
        const [jugadores, juegos, badges, rankings, jugador_badges] = await Promise.all([
          env.CLUB_DB.prepare('SELECT * FROM jugadores ORDER BY cogopoints DESC').all(),
          env.CLUB_DB.prepare('SELECT * FROM juegos WHERE activo = 1').all(),
          env.CLUB_DB.prepare('SELECT * FROM badges ORDER BY rareza DESC').all(),
          env.CLUB_DB.prepare('SELECT * FROM jugador_juego_rank').all(),
          env.CLUB_DB.prepare('SELECT * FROM jugador_badges').all(),
        ]);
        return json({
          jugadores:      jugadores.results  || [],
          juegos:         juegos.results     || [],
          badges:         badges.results     || [],
          rankings:       rankings.results   || [],
          jugador_badges: jugador_badges.results || [],
        }, 200, origin);
      }

      // GET /api/club/jugadores — lista de jugadores
      if (path === '/api/club/jugadores' && request.method === 'GET') {
        const r = await env.CLUB_DB.prepare(
          'SELECT * FROM jugadores ORDER BY cogopoints DESC'
        ).all();
        return json(r.results || [], 200, origin);
      }

      // PATCH /api/club/jugadores/:id/avatar — actualizar avatar
      if (path.match(/^\/api\/club\/jugadores\/\d+\/avatar$/) && request.method === 'PATCH') {
        const id = path.split('/')[4];
        const { avatar_id } = await request.json();
        await env.CLUB_DB.prepare(
          'UPDATE jugadores SET avatar_id = ? WHERE id = ?'
        ).bind(avatar_id, id).run();
        return json({ ok: true }, 200, origin);
      }

      // ══════════════════════════════════════════════════════════
      // RUTAS /api/* — tpc-fifa18 D1 (existentes sin cambios)
      // ══════════════════════════════════════════════════════════

      if (path === '/api/estado' && request.method === 'GET') {
        const temp = await env.DB.prepare(
          'SELECT id FROM temporadas WHERE activa = 1 LIMIT 1'
        ).first();
        const temporadaId = temp?.id || 1;

        const jugs  = await env.DB.prepare(
          'SELECT id, nombre FROM jugadores WHERE activo = 1 ORDER BY nombre'
        ).all();

        const parts = await env.DB.prepare(`
          SELECT p.id, j1.nombre as p1, j2.nombre as p2,
                 p.equipo1_nombre as t1, p.equipo2_nombre as t2,
                 p.estrellas1 as tr1, p.estrellas2 as tr2,
                 p.goles1 as g1, p.goles2 as g2,
                 p.puntos1 as pts1, p.puntos2 as pts2,
                 p.jugado_at as date
          FROM partidos p
          JOIN jugadores j1 ON p.jugador1_id = j1.id
          JOIN jugadores j2 ON p.jugador2_id = j2.id
          WHERE p.temporada_id = ?
          ORDER BY p.jugado_at ASC
        `).bind(temporadaId).all();

        return json({
          temporadaId,
          players:     (jugs.results  || []).map(j => j.nombre),
          jugadoresMap: Object.fromEntries((jugs.results || []).map(j => [j.nombre, j.id])),
          matches:     parts.results || [],
        }, 200, origin);
      }

      if (path === '/api/jugadores' && request.method === 'POST') {
        const { nombre, password } = await request.json();
        if (!nombre) return err('nombre requerido', 400, origin);
        if (!await verifyPassword(password, env)) return err('Contraseña incorrecta', 401, origin);
        const result = await env.DB.prepare(
          'INSERT INTO jugadores (nombre, activo) VALUES (?, 1) RETURNING id, nombre'
        ).bind(nombre.trim()).first();
        return json({ ok: true, jugador: result }, 200, origin);
      }

      if (path.startsWith('/api/jugadores/') && request.method === 'DELETE') {
        const { password } = await request.json();
        if (!await verifyPassword(password, env)) return err('Contraseña incorrecta', 401, origin);
        const id = path.split('/').pop();
        await env.DB.prepare('UPDATE jugadores SET activo = 0 WHERE id = ?').bind(id).run();
        return json({ ok: true }, 200, origin);
      }

      if (path === '/api/partidos' && request.method === 'POST') {
        const { p1, p2, t1, t2, tr1, tr2, g1, g2, pts1, pts2, temporadaId, jugadoresMap, password } = await request.json();
        if (!await verifyPassword(password, env)) return err('Contraseña incorrecta', 401, origin);
        const j1id = jugadoresMap[p1];
        const j2id = jugadoresMap[p2];
        if (!j1id || !j2id) return err('Jugadores no encontrados', 400, origin);
        const result = await env.DB.prepare(`
          INSERT INTO partidos
            (temporada_id, jugador1_id, jugador2_id, equipo1_nombre, equipo2_nombre,
             estrellas1, estrellas2, goles1, goles2, puntos1, puntos2, jugado_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
          RETURNING id
        `).bind(temporadaId, j1id, j2id, t1, t2, tr1, tr2, g1, g2, pts1, pts2).first();
        return json({ ok: true, id: result?.id }, 200, origin);
      }

      if (path.startsWith('/api/partidos/') && request.method === 'DELETE') {
        const { password } = await request.json();
        if (!await verifyPassword(password, env)) return err('Contraseña incorrecta', 401, origin);
        const id = path.split('/').pop();
        await env.DB.prepare('DELETE FROM partidos WHERE id = ?').bind(id).run();
        return json({ ok: true }, 200, origin);
      }

      if (path === '/api/youtube' && request.method === 'GET') {
        const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${env.YOUTUBE_CHANNEL}&type=video&order=date&maxResults=20&key=${env.YOUTUBE_API_KEY}`;
        const res = await fetch(ytUrl);
        if (!res.ok) { const e = await res.json(); return err(e.error?.message || 'YouTube error', res.status, origin); }
        return json(await res.json(), 200, origin);
      }

      if (path === '/api/youtube/latest' && request.method === 'GET') {
        const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${env.YOUTUBE_CHANNEL}&type=video&order=date&maxResults=1&key=${env.YOUTUBE_API_KEY}`;
        const res = await fetch(ytUrl);
        if (!res.ok) return json({ items: [] }, 200, origin);
        return json(await res.json(), 200, origin);
      }

      return err('Ruta no encontrada', 404, origin);

    } catch(e) {
      console.error('Worker error:', e);
      return err(e.message || 'Error interno', 500, origin);
    }
  }
};
