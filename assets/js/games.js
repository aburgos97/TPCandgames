
// ══════════════════════════════════════════════════════
// CONFIG
// ══════════════════════════════════════════════════════
const WORKER_URL = 'https://tpc-worker.aburgos-44f.workers.dev';

// Estado global — se llena desde la BD
let PLAYERS  = [];
let BADGES   = {};
let ranked   = [];
let state    = { jugadores:[], juegos:[], badges:[], rankings:[], jugador_badges:[] };

// Cache de matches FIFA18 para el historial de jugadores
let _matchesCache  = null;
let _currentProfileId = null;

// Tendencias de posición — se pueblan cuando haya histórico de rankings
// Por ahora vacíos: no muestra flechas ↑↓ hasta tener comparación de sesiones
const trends   = {};   // { [rankPos]: '▲' | '▼' }
const trendCls = {};   // { [rankPos]: 'up' | 'down' }

// ── Transformar datos del worker al formato que usa el HTML ──
function transformData(data) {
  state = data;

  // Construir PLAYERS — stats agregadas de todos los juegos activos
  PLAYERS = data.jugadores.map(j => {
    // Suma rankings de todos los juegos del jugador
    const allRanks = data.rankings.filter(r => r.jugador_id === j.id);
    const rank1    = allRanks.find(r => r.juego_id === 1); // FIFA 18 como principal
    const totals   = allRanks.reduce((acc, r) => ({
      pj: acc.pj + (r.partidos  || 0),
      w:  acc.w  + (r.victorias || 0),
      d:  acc.d  + (r.empates   || 0),
      l:  acc.l  + (r.derrotas  || 0),
      gf: acc.gf + (r.gf        || 0),
      gc: acc.gc + (r.gc        || 0),
    }), { pj:0, w:0, d:0, l:0, gf:0, gc:0 });

    return {
      id:    j.id,
      nick:  j.nickname,
      em:    j.avatar_emoji || '🌿',
      cp:    j.cogopoints   || 0,
      bio:   j.bio          || '',
      avg:   rank1?.puntos  || 0,   // promedio pts/partido en juego principal
      racha: rank1?.racha   || 0,
      ...totals,
    };
  });

  // Construir BADGES por jugador_id
  BADGES = {};
  data.jugador_badges.forEach(jb => {
    const badge = data.badges.find(b => b.id === jb.badge_id);
    if (!badge) return;
    if (!BADGES[jb.jugador_id]) BADGES[jb.jugador_id] = [];
    BADGES[jb.jugador_id].push({ i: badge.icono, n: badge.nombre, r: badge.rareza });
  });

  // Ordenar por CogoPoints
  ranked = [...PLAYERS].sort((a,b) => b.cp - a.cp || b.avg - a.avg);
}

// ── Carga desde el Worker ────────────────────────────
async function init() {
  showLoading(true);
  try {
    // Carga estado del club y partidos de FIFA18 en paralelo
    const [clubRes, fifaRes] = await Promise.all([
      fetch(`${WORKER_URL}/api/club/estado`),
      fetch(`${WORKER_URL}/api/estado`),
    ]);
    if (!clubRes.ok) throw new Error(`HTTP ${clubRes.status}`);
    const data = await clubRes.json();
    transformData(data);
    if (fifaRes.ok) {
      const fifaData = await fifaRes.json();
      _matchesCache = fifaData.matches || [];
    }
  } catch(e) {
    console.warn('Worker no disponible, usando datos demo:', e.message);
    loadDemoData();
  } finally {
    showLoading(false);
    renderLB();
  }
}

function showLoading(on) {
  const bar = document.getElementById('lb-info-bar');
  if (bar) bar.innerHTML = on
    ? `🌿 &nbsp;Cargando datos...`
    : '';
}

// ── Datos demo como fallback ─────────────────────────
function loadDemoData() {
  transformData({
    jugadores: [
      {id:1,nickname:'Axel',        avatar_emoji:'🦁',cogopoints:170,bio:'El líder del ladder'},
      {id:2,nickname:'Pancho',      avatar_emoji:'🐺',cogopoints:100,bio:'Siempre peligroso'},
      {id:3,nickname:'Nico F.',     avatar_emoji:'🦊',cogopoints:90, bio:'El técnico del grupo'},
      {id:5,nickname:'Juan Pedro H.',avatar_emoji:'🦅',cogopoints:30,bio:'El nuevo del club'},
      {id:4,nickname:'Sarmien',     avatar_emoji:'🐻',cogopoints:20, bio:'Jugador de carácter'},
      {id:8,nickname:'Chulo Z',     avatar_emoji:'🎯',cogopoints:10, bio:'Precisión total'},
      {id:6,nickname:'Barbaroja',   avatar_emoji:'🏴‍☠️',cogopoints:0, bio:'El veterano'},
      {id:7,nickname:'Gabi G5',     avatar_emoji:'⚡',cogopoints:0,  bio:'Velocidad pura'},
    ],
    juegos:  [{id:1,nombre:'FIFA 18',slug:'fifa18',icono:'⚽'}],
    badges:  [
      {id:1,nombre:'Primer Gol', icono:'⚽',rareza:'comun'},
      {id:2,nombre:'Líder',      icono:'👑',rareza:'epico'},
      {id:3,nombre:'Veterano',   icono:'🎖️',rareza:'raro'},
      {id:6,nombre:'Fundador',   icono:'🌿',rareza:'legendario'},
    ],
    rankings: [
      {jugador_id:1,juego_id:1,puntos:1.71,partidos:17},
      {jugador_id:2,juego_id:1,puntos:1.35,partidos:10},
      {jugador_id:3,juego_id:1,puntos:1.33,partidos:9},
      {jugador_id:5,juego_id:1,puntos:1.33,partidos:3},
      {jugador_id:4,juego_id:1,puntos:0.67,partidos:3},
    ],
    jugador_badges: [
      {jugador_id:1,badge_id:1},{jugador_id:1,badge_id:2},{jugador_id:1,badge_id:3},{jugador_id:1,badge_id:6},
      {jugador_id:2,badge_id:1},{jugador_id:2,badge_id:3},{jugador_id:2,badge_id:6},
      {jugador_id:3,badge_id:1},{jugador_id:3,badge_id:3},{jugador_id:3,badge_id:6},
      {jugador_id:5,badge_id:1},{jugador_id:5,badge_id:6},
      {jugador_id:4,badge_id:6},
      {jugador_id:8,badge_id:1},{jugador_id:8,badge_id:6},
      {jugador_id:6,badge_id:6},{jugador_id:7,badge_id:6},
    ],
  });
}

// ══════════════════════════════════════════════════════
// RENDER LEADERBOARD
// ══════════════════════════════════════════════════════
function renderLB() {
  if (!ranked.length) return;
  const [p1,p2,p3] = ranked;
  const rest = ranked.slice(3);

  // Info bar
  const infoBar = document.getElementById('lb-info-bar');
  if (infoBar) infoBar.innerHTML =
    `🌿 &nbsp;<strong>${ranked.length}</strong> jugadores · Temporada activa · Líder: <strong>${p1.nick}</strong>`;

  document.getElementById('lb-podium').innerHTML = `
    <div class="pod-slot pod-slot-2" onclick="openPerfil(${p2.id})">
      <div class="pod-circle pod-circle-2">
        <div class="pod-circle-inner">${getAvatarContent(p2.id)}</div>
        <div class="pod-rank-badge">2°</div>
      </div>
      <div class="pod-name">${p2.nick}</div>
      <div class="pod-pts-wrap"><span class="pod-gem">🌿</span><span class="pod-pts">${p2.cp}</span></div>
      <div class="pod-pts-lbl">CogoPoints</div>
      <div class="pod-pedestal"><div class="pod-ped-num">2</div></div>
    </div>
    <div class="pod-slot pod-slot-1" onclick="openPerfil(${p1.id})">
      <div class="pod-circle pod-circle-1">
        <div class="pod-circle-inner">${getAvatarContent(p1.id)}</div>
        <div class="pod-rank-badge">1°</div>
      </div>
      <div class="pod-name">${p1.nick}</div>
      <div class="pod-pts-wrap"><span class="pod-gem">🌿</span><span class="pod-pts">${p1.cp}</span></div>
      <div class="pod-pts-lbl">CogoPoints</div>
      <div class="pod-pedestal"><div class="pod-ped-num">1</div></div>
    </div>
    <div class="pod-slot pod-slot-3" onclick="openPerfil(${p3.id})">
      <div class="pod-circle pod-circle-3">
        <div class="pod-circle-inner">${getAvatarContent(p3.id)}</div>
        <div class="pod-rank-badge">3°</div>
      </div>
      <div class="pod-name">${p3.nick}</div>
      <div class="pod-pts-wrap"><span class="pod-gem">🌿</span><span class="pod-pts">${p3.cp}</span></div>
      <div class="pod-pts-lbl">CogoPoints</div>
      <div class="pod-pedestal"><div class="pod-ped-num">3</div></div>
    </div>
  `;

  document.getElementById('lb-list').innerHTML = rest.map((p,i) => {
    const pos = i + 4;
    const t = trends[pos];
    const tc = trendCls[pos] || '';
    return `
    <div class="lb-row" onclick="openPerfil(${p.id})">
      ${t ? `<span class="lb-trend ${tc}">${t}</span>` : ''}
      <div class="lb-no">${pos}</div>
      <div class="lb-player">
        <div class="lb-ava">${getAvatarContent(p.id)}</div>
        <div class="lb-name">${p.nick}</div>
      </div>
      <div class="lb-pts">${p.cp}</div>
      <div class="lb-arr">›</div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════
// HELPERS DE ESTADÍSTICAS
// ══════════════════════════════════════════════════════

// Racha invicta actual: cuenta partidos consecutivos sin perder
// (victorias Y empates) recorriendo desde el más reciente hacia atrás
function computeRachaInvicto(nick) {
  if (!_matchesCache || !_matchesCache.length) return 0;
  const playerMatches = [..._matchesCache]
    .filter(m => m.p1 === nick || m.p2 === nick)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  let racha = 0;
  for (let i = playerMatches.length - 1; i >= 0; i--) {
    const m = playerMatches[i];
    const isP1  = m.p1 === nick;
    const myGol = isP1 ? m.g1 : m.g2;
    const rivGol = isP1 ? m.g2 : m.g1;
    if (myGol >= rivGol) racha++; // V o E → sigue invicto
    else break;                   // D → fin de racha
  }
  return racha;
}

// ══════════════════════════════════════════════════════
// RENDER PROFILE
// ══════════════════════════════════════════════════════
function openPerfil(id) {
  const p = PLAYERS.find(x => x.id === id);
  if (!p) return;
  _currentProfileId = id;
  const pos = ranked.findIndex(x => x.id === id) + 1;
  const badges = BADGES[id] || [];

  const avId = sessionAvatars[id] || PLAYER_AVATARS[id] || AVATARS[0].id;
  const avSrc = getAvatarSrc(id, avId);
  document.getElementById('pf-avatar-wrap').innerHTML = `
    <div class="pf-avatar-ring" style="overflow:visible">
      <div class="pf-avatar-inner" style="background:#1a0805">
        ${getAvatarContent(id, avId)}
      </div>
      <div class="pf-edit" onclick="openAvatarModal(${id}, '${avId}')">✎</div>
    </div>
    <div class="pf-name">${p.nick}</div>
    <div class="pf-club-meta"><span>🌿</span><span>The Pot Club · Posición #${pos}</span></div>
    <div class="pf-cogo-bar">
      <span class="pf-cogo-val">${p.cp}</span>
      <span class="pf-cogo-lbl">CogoPoints</span>
    </div>
  `;

  document.getElementById('pf-info').innerHTML = `
    <span class="pf-rank-section-lbl">Ranking actual</span>
    <div class="pf-rank-row">
      <div class="pf-rank-card">
        <span class="pf-rank-icon">🏆</span>
        <span class="pf-rank-val">#${pos}</span>
        <span class="pf-rank-lbl">Ranking general</span>
      </div>
      <div class="pf-rank-card">
        <span class="pf-rank-icon">⚽</span>
        <span class="pf-rank-val">${p.avg.toFixed(2)}</span>
        <span class="pf-rank-lbl">Promedio FIFA 18</span>
      </div>
    </div>
    <div class="pf-stats-title">Estadísticas FIFA 18</div>
    <div class="pf-stats-grid">
      <div class="pf-stat"><span class="pf-stat-val">${p.pj}</span><span class="pf-stat-lbl">Partidos</span></div>
      <div class="pf-stat"><span class="pf-stat-val">${p.w}</span><span class="pf-stat-lbl">Victorias</span></div>
      <div class="pf-stat"><span class="pf-stat-val">${p.d}</span><span class="pf-stat-lbl">Empates</span></div>
      <div class="pf-stat"><span class="pf-stat-val">${p.l}</span><span class="pf-stat-lbl">Derrotas</span></div>
      <div class="pf-stat"><span class="pf-stat-val">${p.gf}</span><span class="pf-stat-lbl">Goles a favor</span></div>
      <div class="pf-stat"><span class="pf-stat-val">${p.gc}</span><span class="pf-stat-lbl">Goles en contra</span></div>
      <div class="pf-stat"><span class="pf-stat-val">${p.gf - p.gc > 0 ? '+' : ''}${p.gf - p.gc}</span><span class="pf-stat-lbl">Diferencia</span></div>
      <div class="pf-stat"><span class="pf-stat-val">${p.racha > 0 ? '🔥' + p.racha : p.racha}</span><span class="pf-stat-lbl">Racha actual</span></div>
    </div>
  `;

  // ── Logros FIFA 18 ──────────────────────────────────
  // Racha invicta calculada desde el historial real de partidos
  const rachaInvicto = computeRachaInvicto(p.nick);

  // Valla menos invicta: menor promedio de GC entre jugadores con 5+ PJ
  const elegibles = PLAYERS.filter(pl => pl.pj >= 5);
  const mejorPromGC = elegibles.length
    ? Math.min(...elegibles.map(pl => pl.gc / pl.pj))
    : Infinity;
  const esValla = p.pj >= 5 && (p.gc / p.pj) <= mejorPromGC + 0.001;

  // Definición completa de todos los logros posibles
  const LOGROS_DEF = [
    // ── LEGENDARIO ──────────────────────────────────────────────
    { id:'fundador',      icono:'🌿', nombre:'Miembro Fundador',     desc:'Socio fundador del Pot Club',                         rareza:'legendario', cond: j => true },
    { id:'campeon',       icono:'👑', nombre:'Campeón',              desc:'Llegó al #1 del ranking general',                     rareza:'legendario', cond: j => pos === 1 },
    { id:'racha_leg',     icono:'💫', nombre:'Racha Legendaria',     desc:'10 partidos consecutivos sin perder',                  rareza:'legendario', cond: j => rachaInvicto >= 10 },
    // ── ÉPICO ────────────────────────────────────────────────────
    { id:'veterano',      icono:'🎖️', nombre:'Veterano',            desc:'Jugó 15 o más partidos en el torneo',                 rareza:'epico',      cond: j => j.pj >= 15 },
    { id:'invicto',       icono:'🛡️', nombre:'Invicto',             desc:'5 o más partidos sin perder ninguno en la temporada',  rareza:'epico',      cond: j => j.pj >= 5 && j.l === 0 },
    { id:'racha_epic',    icono:'⚡', nombre:'Racha Imparable',      desc:'5 partidos consecutivos sin perder',                   rareza:'epico',      cond: j => rachaInvicto >= 5 },
    { id:'valla',         icono:'🧤', nombre:'Valla Menos Invicta',  desc:'Menor promedio de goles en contra de la temporada',    rareza:'epico',      cond: j => esValla },
    { id:'upset_king',    icono:'💥', nombre:'Upset King',           desc:'Ganó siendo el equipo con menos estrellas',            rareza:'epico',      cond: j => (BADGES[id]||[]).some(b=>b.n==='Upset King') },
    // ── RARO ─────────────────────────────────────────────────────
    { id:'racha_raro',    icono:'🔥', nombre:'En Racha',             desc:'3 partidos consecutivos sin perder',                   rareza:'raro',       cond: j => rachaInvicto >= 3 },
    { id:'resistente',    icono:'💪', nombre:'Resistente',           desc:'Jugó 10 o más partidos en el torneo',                  rareza:'raro',       cond: j => j.pj >= 10 },
    { id:'artillero',     icono:'🎯', nombre:'Artillero',            desc:'Anotó 30 o más goles en el torneo',                    rareza:'raro',       cond: j => j.gf >= 30 },
    { id:'goleador',      icono:'⚽', nombre:'Goleador',             desc:'Marcó 5 o más goles en un solo partido',               rareza:'raro',       cond: j => (BADGES[id]||[]).some(b=>b.n==='Goleador') },
    // ── COMÚN ────────────────────────────────────────────────────
    { id:'debut',         icono:'🎮', nombre:'Debut',                desc:'Jugó su primer partido del torneo',                    rareza:'comun',      cond: j => j.pj >= 1 },
    { id:'primera_vic',   icono:'🏅', nombre:'Primera Sangre',       desc:'Consiguió su primera victoria en el torneo',           rareza:'comun',      cond: j => j.w >= 1 },
    { id:'positivo',      icono:'📈', nombre:'Balance Positivo',     desc:'Más victorias que derrotas en el torneo',              rareza:'comun',      cond: j => j.pj >= 3 && j.w > j.l },
    { id:'empate_artist', icono:'🤝', nombre:'Rey del Empate',       desc:'Empató 3 o más partidos en el torneo',                 rareza:'comun',      cond: j => j.d >= 3 },
  ];

  const RAREZA_ORDEN = { legendario:0, epico:1, raro:2, comun:3 };

  // Separar logros obtenidos vs bloqueados
  const obtenidos  = LOGROS_DEF.filter(l => l.cond(p)).sort((a,b) => RAREZA_ORDEN[a.rareza] - RAREZA_ORDEN[b.rareza]);
  const bloqueados = LOGROS_DEF.filter(l => !l.cond(p)).sort((a,b) => RAREZA_ORDEN[a.rareza] - RAREZA_ORDEN[b.rareza]);

  document.getElementById('pf-badges').innerHTML = `
    <div style="padding:0 0 8px">
      <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(186,120,101,.5);margin-bottom:10px">
        Obtenidos · ${obtenidos.length}/${LOGROS_DEF.length}
      </div>
      <div class="pf-badges-grid">
        ${obtenidos.map(l => `
          <div class="pf-badge ${l.rareza}">
            <span class="pf-badge-icon">${l.icono}</span>
            <span class="pf-badge-name">${l.nombre}</span>
            <span class="pf-badge-desc">${l.desc}</span>
            <span class="pf-badge-rar ${l.rareza}">${l.rareza}</span>
          </div>`).join('')}
        ${!obtenidos.length ? '<p style="color:rgba(248,248,248,.3);font-size:11px;text-align:center;grid-column:1/-1;padding:16px">Sin logros aún · ¡jugá tu primer partido!</p>' : ''}
      </div>
      ${bloqueados.length ? `
        <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(248,248,248,.18);margin:16px 0 10px">
          Bloqueados · ${bloqueados.length}
        </div>
        <div class="pf-badges-grid">
          ${bloqueados.map(l => `
            <div class="pf-badge bloqueado">
              <span class="pf-badge-icon" style="filter:grayscale(1);opacity:.35">${l.icono}</span>
              <span class="pf-badge-name" style="opacity:.35">${l.nombre}</span>
              <span class="pf-badge-desc" style="opacity:.3">${l.desc}</span>
              <span class="pf-badge-rar comun" style="opacity:.3">${l.rareza}</span>
            </div>`).join('')}
        </div>` : ''}
    </div>
  `;

  // Reset tabs
  document.querySelectorAll('.pf-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pf-tab-pane').forEach(t => t.classList.remove('active'));
  document.querySelector('.pf-tab').classList.add('active');
  document.getElementById('pf-info').classList.add('active');

  document.getElementById('screen-leaderboard').style.display = 'none';
  document.getElementById('screen-profile').style.display = 'block';
  window.scrollTo(0,0);
}

// ══════════════════════════════════════════════════════
// NAV
// ══════════════════════════════════════════════════════
function goBack() {
  document.getElementById('screen-profile').style.display = 'none';
  document.getElementById('screen-leaderboard').style.display = 'block';
  window.scrollTo(0,0);
}

function switchMode(mode, btn) {
  document.querySelectorAll('.lb-switch-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function pfTab(btn, paneId) {
  btn.closest('.screen').querySelectorAll('.pf-tab').forEach(t => t.classList.remove('active'));
  btn.closest('.screen').querySelectorAll('.pf-tab-pane').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(paneId).classList.add('active');
  if (paneId === 'pf-history') renderHistorial();
}

const AVATARS = [
  {id:'rasta',name:'Rasta',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#1c2e10"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="47" cy="30" r="1.5" fill="#e8e0a0" opacity=".8"/><circle cx="63" cy="34" r="1.5" fill="#e8e0a0" opacity=".8"/><circle cx="36" cy="54" r="1.5" fill="#f0f0d0" opacity=".7"/><circle cx="74" cy="56" r="1.5" fill="#f0f0d0" opacity=".7"/><ellipse cx="44" cy="64" rx="8" ry="9" fill="#1a1a0a" opacity=".9"/><ellipse cx="66" cy="64" rx="8" ry="9" fill="#1a1a0a" opacity=".9"/><circle cx="44" cy="64" r="5" fill="#cc2200"/><circle cx="66" cy="64" r="5" fill="#cc2200"/><circle cx="45" cy="63" r="2" fill="white"/><circle cx="67" cy="63" r="2" fill="white"/><circle cx="44" cy="64" r="2.5" fill="#0a0a0a"/><circle cx="66" cy="64" r="2.5" fill="#0a0a0a"/><circle cx="44.8" cy="63.2" r="1" fill="white"/><circle cx="66.8" cy="63.2" r="1" fill="white"/><path d="M44 73 Q55 80 66 73" stroke="#2a1a08" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="55" cy="25" rx="22" ry="10" fill="#228B22"/><rect x="33" y="16" width="44" height="18" rx="6" fill="#228B22"/><rect x="33" y="16" width="44" height="6" rx="3" fill="#e8c030"/><rect x="33" y="22" width="44" height="6" fill="#cc2200"/><rect x="33" y="28" width="44" height="6" rx="3" fill="#228B22"/><ellipse cx="55" cy="15" rx="18" ry="7" fill="#4a4a2a"/></svg>`},
  {id:'ninja',name:'Ninja',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#0a1008"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#3a6018"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#2a5a18"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#3a7a20"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#4a8a28"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#4a8a28"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#5a9a30"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#6aaa38"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#6aaa38"/><circle cx="40" cy="44" r="1.8" fill="#e0f0d0" opacity=".8"/><circle cx="55" cy="32" r="1.8" fill="#e0f0d0" opacity=".8"/><circle cx="70" cy="46" r="1.8" fill="#e0f0d0" opacity=".8"/><rect x="30" y="58" width="50" height="22" rx="8" fill="#1a1a2e"/><rect x="30" y="58" width="50" height="10" fill="#0a0a1e"/><ellipse cx="44" cy="63" rx="8" ry="8" fill="#0a0a0a"/><ellipse cx="66" cy="63" rx="8" ry="8" fill="#0a0a0a"/><circle cx="44" cy="63" r="5" fill="#4a9e2a"/><circle cx="66" cy="63" r="5" fill="#4a9e2a"/><circle cx="44.8" cy="62.2" r="2" fill="white"/><circle cx="66.8" cy="62.2" r="2" fill="white"/><circle cx="44" cy="63" r="2.5" fill="#0a0a0a"/><circle cx="66" cy="63" r="2.5" fill="#0a0a0a"/><circle cx="44.8" cy="62.2" r="1" fill="white"/><circle cx="66.8" cy="62.2" r="1" fill="white"/><rect x="28" y="30" width="54" height="14" rx="7" fill="#1a1a2e"/><path d="M28 37 Q55 32 82 37" stroke="#4a9e2a" stroke-width="2" fill="none"/><line x1="80" y1="20" x2="100" y2="60" stroke="#c8c8d0" stroke-width="3" stroke-linecap="round"/><rect x="76" y="56" width="10" height="7" rx="2" fill="#c8a020"/></svg>`},
  {id:'cientifico',name:'Científico',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#0a1428"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><ellipse cx="44" cy="64" rx="10" ry="11" fill="#0a0a0a"/><ellipse cx="66" cy="64" rx="10" ry="11" fill="#0a0a0a"/><circle cx="44" cy="64" r="7" fill="#e8f8ff" opacity=".9"/><circle cx="66" cy="64" r="7" fill="#e8f8ff" opacity=".9"/><circle cx="44" cy="64" r="4" fill="#4a90d4"/><circle cx="66" cy="64" r="4" fill="#4a90d4"/><circle cx="45" cy="63" r="1.8" fill="white"/><circle cx="67" cy="63" r="1.8" fill="white"/><line x1="54" y1="64" x2="56" y2="64" stroke="#888" stroke-width="2"/><line x1="22" y1="64" x2="34" y2="64" stroke="#888" stroke-width="1.5"/><line x1="76" y1="64" x2="88" y2="64" stroke="#888" stroke-width="1.5"/><path d="M46 74 Q55 77 64 74" stroke="#2a5a10" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="55" cy="24" rx="24" ry="10" fill="white"/><rect x="31" y="14" width="48" height="14" rx="3" fill="white"/><ellipse cx="55" cy="14" rx="24" ry="5" fill="#e0e0e0"/><path d="M82 70 Q90 64 88 54 Q86 46 92 42" stroke="#4a9a28" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="92" cy="40" rx="6" ry="8" fill="#4ab87a" opacity=".8" stroke="#2a7a50" stroke-width="1"/></svg>`},
  {id:'policia',name:'Policía',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#0a0e1a"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><ellipse cx="44" cy="64" rx="8" ry="9" fill="#0a0a0a"/><ellipse cx="66" cy="64" rx="8" ry="9" fill="#0a0a0a"/><circle cx="44" cy="64" r="5" fill="#1a2a4a"/><circle cx="66" cy="64" r="5" fill="#1a2a4a"/><circle cx="45" cy="63" r="2" fill="white"/><circle cx="67" cy="63" r="2" fill="white"/><path d="M46 74 Q55 72 64 74" stroke="#2a5a10" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="30" y="20" width="50" height="18" rx="6" fill="#1a2a4a"/><ellipse cx="55" cy="20" rx="26" ry="8" fill="#1a3060"/><polygon points="55,10 60,22 50,22" fill="#c8a020"/><circle cx="55" cy="14" r="6" fill="#c8a020"/><rect x="34" y="28" width="42" height="6" rx="2" fill="#1a1a3a"/><ellipse cx="55" cy="52" rx="5" ry="6" fill="#c8a020"/></svg>`},
  {id:'chef',name:'Chef',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#1a0e06"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><ellipse cx="44" cy="63" rx="8" ry="9" fill="#0a0a0a"/><ellipse cx="66" cy="63" rx="8" ry="9" fill="#0a0a0a"/><circle cx="44" cy="63" r="5" fill="#8B4513"/><circle cx="66" cy="63" r="5" fill="#8B4513"/><circle cx="45" cy="62" r="2" fill="white"/><circle cx="67" cy="62" r="2" fill="white"/><path d="M44 72 Q55 79 66 72" stroke="#2a5a10" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="55" cy="28" rx="22" ry="14" fill="white"/><rect x="33" y="14" width="44" height="18" rx="3" fill="white" stroke="#e0e0e0" stroke-width="1"/><ellipse cx="55" cy="14" rx="22" ry="7" fill="#e8e8e8"/><line x1="80" y1="54" x2="100" y2="36" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="34" r="8" fill="#8B4513"/><ellipse cx="100" cy="32" rx="5" ry="4" fill="#4a9a28" opacity=".6"/></svg>`},
  {id:'dj',name:'DJ',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#0a0a1a"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><path d="M25 60 Q22 46 36 40" stroke="#1a1a2e" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M85 60 Q88 46 74 40" stroke="#1a1a2e" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="18" y="56" width="12" height="16" rx="6" fill="#4a90d4"/><rect x="80" y="56" width="12" height="16" rx="6" fill="#4a90d4"/><ellipse cx="44" cy="64" rx="9" ry="10" fill="#0a0a0a"/><ellipse cx="66" cy="64" rx="9" ry="10" fill="#0a0a0a"/><circle cx="44" cy="64" r="6" fill="#cc2200"/><circle cx="66" cy="64" r="6" fill="#4a9e2a"/><circle cx="45" cy="63" r="2.5" fill="white"/><circle cx="67" cy="63" r="2.5" fill="white"/><path d="M44 74 Q55 82 66 74" stroke="#2a5a10" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="30" y="22" width="50" height="16" rx="6" fill="#1a1a1a"/><rect x="28" y="32" width="54" height="6" rx="3" fill="#0a0a0a"/><circle cx="55" cy="26" r="5" fill="#cc2200"/></svg>`},
  {id:'pirata',name:'Pirata',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#0e0a1a"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><ellipse cx="44" cy="63" rx="9" ry="10" fill="#1a1a1a"/><ellipse cx="44" cy="63" rx="7" ry="8" fill="#0a0a0a"/><line x1="34" y1="58" x2="54" y2="58" stroke="#1a1a1a" stroke-width="2"/><ellipse cx="66" cy="64" rx="8" ry="9" fill="#0a0a0a"/><circle cx="66" cy="64" r="5" fill="#2a6a10"/><circle cx="67" cy="63" r="2" fill="white"/><path d="M44 74 Q55 82 66 74" stroke="#2a5a10" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="55" cy="25" rx="28" ry="10" fill="#1a1a1a"/><rect x="27" y="14" width="56" height="16" rx="4" fill="#1a1a1a"/><ellipse cx="55" cy="14" rx="24" ry="8" fill="#222"/><path d="M34 20 Q55 12 76 20" stroke="#888" stroke-width="1.5" fill="none"/><ellipse cx="55" cy="18" rx="7" ry="8" fill="#f0f0e0"/><circle cx="52" cy="16" r="2" fill="#1a1a1a"/><circle cx="58" cy="16" r="2" fill="#1a1a1a"/><path d="M50 20 L52 23 L55 21 L58 23 L60 20" stroke="#1a1a1a" stroke-width="1" fill="none"/></svg>`},
  {id:'mago',name:'Mago',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#0a0818"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><ellipse cx="44" cy="63" rx="9" ry="10" fill="#0a0a0a"/><ellipse cx="66" cy="63" rx="9" ry="10" fill="#0a0a0a"/><circle cx="44" cy="63" r="6" fill="#7a20a0"/><circle cx="66" cy="63" r="6" fill="#7a20a0"/><circle cx="45" cy="62" r="2.5" fill="white"/><circle cx="67" cy="62" r="2.5" fill="white"/><circle cx="44" cy="63" r="1" fill="#e8e030"/><circle cx="66" cy="63" r="1" fill="#e8e030"/><path d="M44 73 Q55 80 66 73" stroke="#2a5a10" stroke-width="2.5" fill="none" stroke-linecap="round"/><polygon points="55,4 72,32 38,32" fill="#2a1a4a"/><ellipse cx="55" cy="32" rx="26" ry="9" fill="#3a2a5a"/><circle cx="50" cy="18" r="2.5" fill="#e8e030"/><circle cx="60" cy="24" r="2" fill="#e87030"/><circle cx="46" cy="26" r="1.8" fill="#30a0e8"/><line x1="80" y1="50" x2="100" y2="30" stroke="#4a2a6a" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="28" r="7" fill="#e8e030"/><circle cx="100" cy="28" r="4" fill="#fff0a0"/></svg>`},
  {id:'rey',name:'Rey',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#1a1008"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><ellipse cx="44" cy="63" rx="9" ry="10" fill="#0a0a0a"/><ellipse cx="66" cy="63" rx="9" ry="10" fill="#0a0a0a"/><circle cx="44" cy="63" r="6" fill="#c8a020"/><circle cx="66" cy="63" r="6" fill="#c8a020"/><circle cx="45" cy="62" r="2.5" fill="white"/><circle cx="67" cy="62" r="2.5" fill="white"/><circle cx="44" cy="63" r="3" fill="#1a0a0a"/><circle cx="66" cy="63" r="3" fill="#1a0a0a"/><circle cx="44.8" cy="62.2" r="1.2" fill="white"/><circle cx="66.8" cy="62.2" r="1.2" fill="white"/><path d="M44 73 Q55 79 66 73" stroke="#2a5a10" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="30" y="24" width="50" height="16" rx="3" fill="#c8a020"/><polygon points="30,24 38,12 46,24" fill="#c8a020"/><polygon points="47,24 55,10 63,24" fill="#c8a020"/><polygon points="64,24 72,12 80,24" fill="#c8a020"/><circle cx="38" cy="14" r="4" fill="#cc2200"/><circle cx="55" cy="11" r="5" fill="#4a90d4"/><circle cx="72" cy="14" r="4" fill="#4a9e2a"/><rect x="30" y="30" width="50" height="4" rx="2" fill="#e8c030"/></svg>`},
  {id:'astronauta',name:'Astronauta',svg:`<svg viewBox="0 0 110 127" xmlns="http://www.w3.org/2000/svg"><rect width="110" height="127" fill="#080814"/><circle cx="12" cy="15" r="1" fill="white" opacity=".6"/><circle cx="88" cy="20" r="1" fill="white" opacity=".6"/><circle cx="98" cy="8" r="1.2" fill="white" opacity=".8"/><circle cx="20" cy="100" r="1" fill="white" opacity=".5"/><circle cx="95" cy="95" r="1" fill="white" opacity=".6"/><rect x="50" y="92" width="10" height="28" rx="5" fill="#4a7a18"/><ellipse cx="55" cy="62" rx="28" ry="34" fill="#3a7a20"/><ellipse cx="55" cy="55" rx="24" ry="28" fill="#4a9a28"/><ellipse cx="42" cy="50" rx="14" ry="17" fill="#5ab030"/><ellipse cx="68" cy="52" rx="12" ry="15" fill="#5ab030"/><ellipse cx="55" cy="38" rx="13" ry="16" fill="#6ac038"/><ellipse cx="44" cy="36" rx="9" ry="11" fill="#7ad048"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#7ad048"/><circle cx="40" cy="44" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="55" cy="32" r="2" fill="#f0f0d0" opacity=".9"/><circle cx="70" cy="46" r="2" fill="#f0f0d0" opacity=".9"/><ellipse cx="55" cy="56" rx="32" ry="34" fill="#d0d0e0" stroke="#b0b0c0" stroke-width="2"/><ellipse cx="55" cy="54" rx="26" ry="28" fill="#a8d8f8" opacity=".85"/><ellipse cx="44" cy="46" rx="10" ry="8" fill="white" opacity=".3"/><ellipse cx="44" cy="62" rx="8" ry="9" fill="#0a0a0a" opacity=".8"/><ellipse cx="66" cy="62" rx="8" ry="9" fill="#0a0a0a" opacity=".8"/><circle cx="44" cy="62" r="5" fill="#4a9e2a"/><circle cx="66" cy="62" r="5" fill="#4a9e2a"/><circle cx="45" cy="61" r="2" fill="white"/><circle cx="67" cy="61" r="2" fill="white"/><path d="M44 71 Q55 78 66 71" stroke="#2a5a10" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="36" y="82" width="38" height="8" rx="4" fill="#c0c0d0"/><rect x="38" y="84" width="34" height="4" rx="2" fill="#8888a0"/><rect x="72" y="48" width="18" height="12" rx="2" fill="#e8e0c0"/><rect x="72" y="48" width="6" height="12" rx="1" fill="#4a9e2a"/></svg>`},
];

const PLAYER_AVATARS = {
  1: 'rasta',
  2: 'ninja',
  3: 'cientifico',
  4: 'astronauta',
  5: 'mago',
  6: 'dj',
  7: 'pirata',
  8: 'policia',
  9: 'chef',
};


function getAvatarSrc(playerId, selectedAvatarId) {
  const avId = selectedAvatarId || PLAYER_AVATARS[playerId] || AVATARS[0].id;
  const av = AVATARS.find(a => a.id === avId);
  return av ? av.src || av.svg : AVATARS[0].svg;
}

function getAvatarContent(playerId, selectedAvatarId) {
  const avId = selectedAvatarId || PLAYER_AVATARS[playerId] || AVATARS[0].id;
  const av = AVATARS.find(a => a.id === avId);
  return av ? av.svg : AVATARS[0].svg;
}

// Estado de avatar seleccionado (en memoria por sesión)
const sessionAvatars = {};

function openAvatarModal(playerId, currentAvId) {
  // Crear el modal
  const overlay = document.createElement('div');
  overlay.className = 'avatar-modal-overlay';
  overlay.id = 'avatar-modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'avatar-modal';
  
  let selectedId = currentAvId || PLAYER_AVATARS[playerId] || AVATARS[0].id;
  
  modal.innerHTML = `
    <div class="avatar-modal-header">
      <span class="avatar-modal-title">🌿 Elegí tu avatar</span>
      <button class="avatar-modal-close" onclick="closeAvatarModal()">✕</button>
    </div>
    <div class="avatar-grid" id="avatar-grid">
      ${AVATARS.map(av => `
        <div class="avatar-grid-item ${av.id === selectedId ? 'selected' : ''}" 
             data-id="${av.id}"
             onclick="selectAvatar('${av.id}', ${playerId})">
          ${av.svg}
          <span>${av.name}</span>
        </div>`).join('')}
    </div>
    <button class="avatar-confirm-btn" onclick="confirmAvatar(${playerId})">
      ✅ Confirmar avatar
    </button>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Cerrar al hacer clic fuera
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeAvatarModal();
  });
}

let tempSelectedAvatar = null;

function selectAvatar(avId, playerId) {
  tempSelectedAvatar = avId;
  document.querySelectorAll('.avatar-grid-item').forEach(el => el.classList.remove('selected'));
  document.querySelector(`[data-id="${avId}"]`)?.classList.add('selected');
}

function confirmAvatar(playerId) {
  if (tempSelectedAvatar) {
    sessionAvatars[playerId] = tempSelectedAvatar;
    closeAvatarModal();
    // Re-renderizar el perfil con el nuevo avatar
    openPerfil(playerId);
  } else {
    closeAvatarModal();
  }
}

function closeAvatarModal() {
  document.getElementById('avatar-modal-overlay')?.remove();
  tempSelectedAvatar = null;
}

// ══════════════════════════════════════════════════════
// HISTORIAL DE PARTIDOS POR JUGADOR
// ══════════════════════════════════════════════════════
async function renderHistorial() {
  const el = document.getElementById('pf-history');
  if (!el) return;

  const p = PLAYERS.find(x => x.id === _currentProfileId);
  if (!p) return;

  el.innerHTML = '<div class="hist-loading">⏳ Cargando historial...</div>';

  try {
    if (!_matchesCache) {
      const data = await fetch(`${WORKER_URL}/api/estado`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      });
      _matchesCache = data.matches || [];
    }

    // Filtrar partidos del jugador y mostrar del más reciente al más antiguo
    const playerMatches = [..._matchesCache]
      .filter(m => m.p1 === p.nick || m.p2 === p.nick)
      .reverse();

    if (!playerMatches.length) {
      el.innerHTML = '<div class="hist-empty">Sin partidos registrados aún</div>';
      return;
    }

    const cards = playerMatches.map(m => {
      const isP1   = m.p1 === p.nick;
      const myGol  = isP1 ? m.g1 : m.g2;
      const oppGol = isP1 ? m.g2 : m.g1;
      const oppNick = isP1 ? m.p2 : m.p1;
      const myTeam  = isP1 ? m.t1 : m.t2;
      const oppTeam = isP1 ? m.t2 : m.t1;
      const myPts   = isP1 ? m.pts1 : m.pts2;
      const res     = myGol > oppGol ? 'win' : myGol < oppGol ? 'loss' : 'draw';
      const resLbl  = res === 'win' ? 'V' : res === 'loss' ? 'D' : 'E';
      const date    = new Date(m.date).toLocaleDateString('es-AR');

      return `
        <div class="hist-card hist-card-${res}">
          <div class="hist-badge hist-badge-${res}">${resLbl}</div>
          <div class="hist-info">
            <div class="hist-score">${myGol} <span class="hist-dash">—</span> ${oppGol}</div>
            <div class="hist-opp">vs <strong>${oppNick}</strong></div>
            ${myTeam ? `<div class="hist-teams">${myTeam}${oppTeam ? ' · ' + oppTeam : ''}</div>` : ''}
          </div>
          <div class="hist-meta">
            <div class="hist-date">${date}</div>
            <div class="hist-pts">+${myPts} pts</div>
          </div>
        </div>`;
    }).join('');

    el.innerHTML = `
      <div class="hist-header">
        <span>⚽ FIFA 18</span>
        <span>${playerMatches.length} partido${playerMatches.length !== 1 ? 's' : ''}</span>
      </div>
      ${cards}
    `;
  } catch(e) {
    el.innerHTML = '<div class="hist-empty" style="color:rgba(186,120,101,.5)">No se pudo cargar el historial</div>';
  }
}

// Init — conecta al worker real
init();
