/**
 * TPC Worker — Cloudflare Worker Central
 * BD: tpc-fifa18 (DB) + tpc-club (CLUB_DB)
 *
 * Bindings D1 en Cloudflare Dashboard → Worker → Settings → Bindings:
 *   DB      → tpc-fifa18   (7cff90ca-b5de-4c97-822f-435fdcf639f1)
 *   CLUB_DB → tpc-club     (pendiente — ver wrangler.toml)
 *
 * Secrets:
 *   ADMIN_PWD_HASH   — SHA-256 hex de la contraseña de admin
 *   ANTHROPIC_KEY    — API key de Anthropic (para /api/scan)
 *   YOUTUBE_CHANNEL  — ID del canal de YouTube
 *   YOUTUBE_API_KEY  — API key de YouTube
 *   RIOT_API_KEY     — API key de Riot Games (para /api/riot)
 */

const ALLOWED_ORIGINS = [
  'https://thepot-club.com',
  'https://www.thepot-club.com',
  'https://tpcgames.pages.dev',
  'https://tpcandgames.pages.dev',
  'https://tpcgames26.netlify.app',
  'http://localhost',
  'http://localhost:5500',
  'http://127.0.0.1',
  'http://127.0.0.1:5500',
];

function isAllowedOrigin(origin) {
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Permite cualquier preview deploy de Cloudflare Pages del proyecto
  if (origin.endsWith('.tpcandgames.pages.dev')) return true;
  return false;
}

function corsHeaders(origin) {
  const allowed = isAllowedOrigin(origin) ? origin : ALLOWED_ORIGINS[0];
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

// ── Rate limiting (in-memory, se resetea por instancia) ──────
const rateLimitMap = new Map();
const RATE_LIMIT  = 20;
const RATE_WINDOW = 60_000;

function checkRateLimit(ip) {
  const now    = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now - record.start > RATE_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return true;
  }
  record.count++;
  return record.count <= RATE_LIMIT;
}

async function verifyPassword(pwd, env) {
  const buf  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwd));
  const hash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  return hash === env.ADMIN_PWD_HASH;
}

function calcPts(winnerStars, loserStars, gd) {
  const starsDiff = loserStars - winnerStars;
  let pts = 3;
  if (starsDiff > 0) pts += Math.floor(starsDiff / 1.5) * 0.5;
  pts += Math.floor(gd / 3) * 0.5;
  return Math.round(pts * 10) / 10;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url    = new URL(request.url);
    const path   = url.pathname;
    const ip     = request.headers.get('CF-Connecting-IP') || 'unknown';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (path.startsWith('/api/')) {
      if (!checkRateLimit(ip)) {
        return err('Too many requests. Intentá de nuevo en 1 minuto.', 429, origin);
      }
    }

    try {

      // ══════════════════════════════════════════════════════
      // RUTAS /api/club/* — tpc-club D1
      // ══════════════════════════════════════════════════════

      if (path === '/api/club/estado' && request.method === 'GET') {
        // ── Temporada activa ────────────────────────────────────
        const temp = await env.DB.prepare(
          'SELECT id FROM temporadas WHERE activa = 1 LIMIT 1'
        ).first();
        const temporadaId = temp?.id || 1;

        // ── CATÁLOGO DE JUEGOS ──────────────────────────────────
        // Para agregar un nuevo juego en el futuro:
        //   1. Crear su D1 DB y binding en wrangler.toml
        //   2. Agregar un bloque a GAMES con su db y la query de stats
        // ────────────────────────────────────────────────────────
        const GAMES = [
          { id: 1, nombre: 'FIFA 18', slug: 'fifa18', icono: '⚽', db: env.DB, temporadaId },
          // { id: 2, nombre: 'Pool',    slug: 'pool',   icono: '🎱', db: env.POOL_DB, temporadaId: 1 },
        ];

        // ── Stats agregadas por jugador por juego ───────────────
        async function getStatsForGame(game) {
          const res = await game.db.prepare(`
            SELECT
              j.id,
              j.nombre                                                                        AS nickname,
              COUNT(p.id)                                                                     AS pj,
              SUM(CASE WHEN (p.jugador1_id=j.id AND p.puntos1>p.puntos2) OR
                            (p.jugador2_id=j.id AND p.puntos2>p.puntos1) THEN 1 ELSE 0 END)  AS v,
              SUM(CASE WHEN p.puntos1=p.puntos2                           THEN 1 ELSE 0 END)  AS e,
              SUM(CASE WHEN (p.jugador1_id=j.id AND p.puntos1<p.puntos2) OR
                            (p.jugador2_id=j.id AND p.puntos2<p.puntos1) THEN 1 ELSE 0 END)  AS d,
              SUM(CASE WHEN p.jugador1_id=j.id THEN p.goles1   ELSE p.goles2   END)          AS gf,
              SUM(CASE WHEN p.jugador1_id=j.id THEN p.goles2   ELSE p.goles1   END)          AS gc,
              SUM(CASE WHEN p.jugador1_id=j.id THEN p.puntos1  ELSE p.puntos2  END)          AS pts,
              AVG(CASE WHEN p.jugador1_id=j.id THEN p.estrellas1 ELSE p.estrellas2 END)      AS avg_str,
              MAX(CASE WHEN p.jugador1_id=j.id THEN p.goles1   ELSE p.goles2   END)          AS max_goles,
              SUM(CASE WHEN
                (p.jugador1_id=j.id AND p.puntos1>p.puntos2 AND p.estrellas1<p.estrellas2) OR
                (p.jugador2_id=j.id AND p.puntos2>p.puntos1 AND p.estrellas2<p.estrellas1)
              THEN 1 ELSE 0 END)                                                              AS upsets
            FROM jugadores j
            LEFT JOIN partidos p
              ON (p.jugador1_id=j.id OR p.jugador2_id=j.id) AND p.temporada_id=?
            WHERE j.activo=1
            GROUP BY j.id, j.nombre
            ORDER BY pts DESC, v DESC
          `).bind(game.temporadaId).all();
          return res.results || [];
        }

        // ── Racha actual (victorias consecutivas) ───────────────
        async function getStreaks(game) {
          const res = await game.db.prepare(`
            SELECT jugador1_id, jugador2_id, puntos1, puntos2
            FROM partidos WHERE temporada_id=?
            ORDER BY jugado_at ASC
          `).bind(game.temporadaId).all();
          const matches = res.results || [];

          const streakMap = {};
          for (const m of matches) {
            for (const pid of [m.jugador1_id, m.jugador2_id]) {
              const myPts  = m.jugador1_id === pid ? m.puntos1 : m.puntos2;
              const rivPts = m.jugador1_id === pid ? m.puntos2 : m.puntos1;
              if (myPts > rivPts)       streakMap[pid] = (streakMap[pid] || 0) + 1;
              else if (myPts < rivPts)  streakMap[pid] = 0;
              // empate no corta ni suma racha
            }
          }
          return streakMap;
        }

        // ── Badges definidos (solo los que requieren datos de partido) ──
        // Los demás logros se calculan client-side en LOGROS_DEF
        const SERVER_BADGES = [
          { id: 1, icono: '🔥', nombre: 'Goleador',   rareza: 'raro',  check: s => (s.max_goles || 0) >= 5 },
          { id: 2, icono: '💥', nombre: 'Upset King', rareza: 'epico', check: s => (s.upsets    || 0) >= 1 },
        ];

        // ── Agregar resultados de todos los juegos ──────────────
        const jugadoresMap = {};
        const rankings     = [];
        const jugadorBadges = [];

        for (const game of GAMES) {
          const [stats, streaks] = await Promise.all([
            getStatsForGame(game),
            getStreaks(game),
          ]);

          for (const s of stats) {
            // Jugador (toma el primero que lo defina, los demás juegos suman ranking)
            if (!jugadoresMap[s.id]) {
              jugadoresMap[s.id] = {
                id:           s.id,
                nickname:     s.nickname,
                avatar_emoji: '🌿',
                cogopoints:   0,
                bio:          '',
              };
            }
            const pts = s.pts || 0;
            jugadoresMap[s.id].cogopoints += Math.round(pts * 10) / 10;

            rankings.push({
              jugador_id: s.id,
              juego_id:   game.id,
              partidos:   s.pj   || 0,
              puntos:     s.pj > 0 ? Math.round((pts / s.pj) * 100) / 100 : 0,
              victorias:  s.v    || 0,
              empates:    s.e    || 0,
              derrotas:   s.d    || 0,
              gf:         s.gf   || 0,
              gc:         s.gc   || 0,
              racha:      streaks[s.id] || 0,
              avg_str:    s.avg_str ? Math.round(s.avg_str * 10) / 10 : 0,
            });

            // Badges computados server-side
            for (const badge of SERVER_BADGES) {
              if (badge.check(s)) {
                jugadorBadges.push({ jugador_id: s.id, badge_id: badge.id });
              }
            }
          }
        }

        // Jugadores ordenados por CogoPoints totales
        const jugadores = Object.values(jugadoresMap)
          .sort((a, b) => b.cogopoints - a.cogopoints);

        return json({
          jugadores,
          juegos:         GAMES.map(g => ({ id: g.id, nombre: g.nombre, slug: g.slug, icono: g.icono, activo: 1 })),
          badges:         SERVER_BADGES.map(({ check: _, ...b }) => b),
          rankings,
          jugador_badges: jugadorBadges,
        }, 200, origin);
      }

      if (path === '/api/club/jugadores' && request.method === 'GET') {
        const r = await env.DB.prepare(
          'SELECT id, nombre AS nickname FROM jugadores WHERE activo=1 ORDER BY nombre'
        ).all();
        return json(r.results || [], 200, origin);
      }

      // PATCH avatar — pendiente hasta tener tabla de perfiles en DB
      // if (path.match(/^\/api\/club\/jugadores\/\d+\/avatar$/) && request.method === 'PATCH') { ... }

      // ══════════════════════════════════════════════════════
      // RUTAS /api/* — tpc-fifa18 D1
      // ══════════════════════════════════════════════════════

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

        await env.DB.prepare(`
          CREATE TABLE IF NOT EXISTS equipos_custom (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL UNIQUE,
            estrellas REAL NOT NULL,
            liga TEXT NOT NULL,
            creado_at TEXT DEFAULT (datetime('now'))
          )
        `).run();
        const ct = await env.DB.prepare(
          'SELECT id, nombre AS n, estrellas AS s, liga AS l FROM equipos_custom ORDER BY liga, nombre'
        ).all();

        return json({
          temporadaId,
          players:      (jugs.results  || []).map(j => j.nombre),
          jugadoresMap: Object.fromEntries((jugs.results || []).map(j => [j.nombre, j.id])),
          matches:      parts.results || [],
          customTeams:  ct.results || [],
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

      if (path === '/api/equipos' && request.method === 'GET') {
        await env.DB.prepare(`
          CREATE TABLE IF NOT EXISTS equipos_custom (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL UNIQUE,
            estrellas REAL NOT NULL,
            liga TEXT NOT NULL,
            creado_at TEXT DEFAULT (datetime('now'))
          )
        `).run();
        const r = await env.DB.prepare(
          'SELECT id, nombre AS n, estrellas AS s, liga AS l FROM equipos_custom ORDER BY liga, nombre'
        ).all();
        return json(r.results || [], 200, origin);
      }

      if (path === '/api/equipos' && request.method === 'POST') {
        const { nombre, estrellas, liga, password } = await request.json();
        if (!nombre || !estrellas || !liga) return err('Faltan campos', 400, origin);
        if (!await verifyPassword(password, env)) return err('Contraseña incorrecta', 401, origin);
        const result = await env.DB.prepare(
          'INSERT INTO equipos_custom (nombre, estrellas, liga) VALUES (?, ?, ?) RETURNING id'
        ).bind(nombre.trim(), Number(estrellas), liga.trim()).first();
        return json({ ok: true, id: result?.id }, 200, origin);
      }

      if (path.startsWith('/api/equipos/') && request.method === 'DELETE') {
        const { password } = await request.json();
        if (!await verifyPassword(password, env)) return err('Contraseña incorrecta', 401, origin);
        const id = path.split('/').pop();
        await env.DB.prepare('DELETE FROM equipos_custom WHERE id = ?').bind(id).run();
        return json({ ok: true }, 200, origin);
      }

      if (path === '/api/recalc-pts' && request.method === 'POST') {
        const { password } = await request.json();
        if (!await verifyPassword(password, env)) return err('Contraseña incorrecta', 401, origin);
        const { results: partidos } = await env.DB.prepare(
          'SELECT id, goles1, goles2, estrellas1, estrellas2, puntos1, puntos2 FROM partidos'
        ).all();
        let updated = 0;
        for (const p of partidos || []) {
          const gd = Math.abs(p.goles1 - p.goles2);
          let pts1 = p.puntos1, pts2 = p.puntos2;
          if (p.goles1 > p.goles2) {
            pts1 = calcPts(p.estrellas1, p.estrellas2, gd);
            pts2 = 0;
          } else if (p.goles2 > p.goles1) {
            pts2 = calcPts(p.estrellas2, p.estrellas1, gd);
            pts1 = 0;
          }
          if (pts1 !== p.puntos1 || pts2 !== p.puntos2) {
            await env.DB.prepare('UPDATE partidos SET puntos1=?, puntos2=? WHERE id=?')
              .bind(pts1, pts2, p.id).run();
            updated++;
          }
        }
        return json({ ok: true, updated, total: partidos?.length || 0 }, 200, origin);
      }

      if (path === '/api/riot' && request.method === 'GET') {
        const gameName = url.searchParams.get('gameName');
        const tagLine  = url.searchParams.get('tagLine');
        if (!gameName || !tagLine) return err('gameName y tagLine requeridos', 400, origin);
        if (!env.RIOT_API_KEY) return err('RIOT_API_KEY no configurada', 500, origin);

        const riotHeaders = { 'X-Riot-Token': env.RIOT_API_KEY };

        const accountRes = await fetch(
          `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`,
          { headers: riotHeaders }
        );
        if (!accountRes.ok) return err('Cuenta de Riot no encontrada', accountRes.status, origin);
        const { puuid } = await accountRes.json();

        const [lolRankRes, tftRankRes] = await Promise.all([
          fetch(`https://la2.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`, { headers: riotHeaders }),
          fetch(`https://la2.api.riotgames.com/tft/league/v1/entries/by-puuid/${puuid}`,  { headers: riotHeaders }),
        ]);
        const lolEntries = lolRankRes.ok ? await lolRankRes.json() : [];
        const tftEntries = tftRankRes.ok ? await tftRankRes.json() : [];

        return json({
          lol: { soloq: lolEntries.find(e => e.queueType === 'RANKED_SOLO_5x5') || null },
          tft: { ranked: tftEntries.find(e => e.queueType === 'RANKED_TFT')     || null },
        }, 200, origin);
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

      if (path === '/api/scan' && request.method === 'POST') {
        const { image_base64, media_type, team_list } = await request.json();
        if (!image_base64 || !media_type) return err('Faltan parámetros', 400, origin);
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type':      'application/json',
            'x-api-key':         env.ANTHROPIC_KEY,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model:      'claude-haiku-4-5-20251001',
            max_tokens: 300,
            messages: [{
              role: 'user',
              content: [
                { type: 'image', source: { type: 'base64', media_type, data: image_base64 } },
                { type: 'text', text: `Esta es la pantalla de resultado de un partido de FIFA 18. Identificá los dos equipos y los goles de cada uno. Luego encontrá el nombre MÁS PARECIDO de cada equipo en esta lista oficial de FIFA 18:\n\n${team_list}\n\nRespondé ÚNICAMENTE con este JSON:\n{"team1_raw":"...","team1_match":"...","goals1":0,"team2_raw":"...","team2_match":"...","goals2":0}` }
              ]
            }]
          })
        });
        if (!res.ok) { const e = await res.json(); return err(e.error?.message || 'Anthropic error', res.status, origin); }
        return json(await res.json(), 200, origin);
      }

      return err('Ruta no encontrada', 404, origin);

    } catch(e) {
      console.error('Worker error:', e);
      return err(e.message || 'Error interno', 500, origin);
    }
  }
};
