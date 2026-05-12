# TPCandgames — Claude Code Guide

## Branches & Deployment

- **`develop`** — rama de trabajo activa. Todo el desarrollo nuevo va aquí.
- **`main`** — rama de producción. Conectada a Cloudflare Pages. Solo mergear cuando el feature está listo para producción.

### Deploy a producción

```bash
bash deploy.sh
```

O manualmente:

```bash
git checkout main
git merge develop
git push origin main
git checkout develop
```

## Stack

- Sitio estático: HTML, CSS, JS
- Hosting: Cloudflare Pages (conectado a `origin/main`)
- Repo: https://github.com/aburgos97/TPCandgames
- Worker: `tpc-worker` en Cloudflare Workers (`api/index.js`), deploy con `npx wrangler deploy` desde `api/` (usar bash, no PowerShell)
- Base de datos: D1 SQLite `tpc-fifa18` (binding `DB` en el Worker)

## Arquitectura

### Worker (`api/index.js`)
Proxy central para todas las APIs. Rutas principales:
- `GET /api/club/estado` — jugadores, rankings, badges del club
- `GET /api/estado` — partidos FIFA18, jugadores, equipos custom
- `POST /api/partidos` — registrar partido (requiere password)
- `GET/POST /api/equipos` — equipos custom en D1
- `POST /api/recalc-pts` — recalcula puntos históricos (requiere password)
- `GET /api/riot` — datos Riot: LoL live + TFT desde cache D1
- `POST /api/riot/scan-tft` — escanea tier/division en Riot API y guarda en cache (requiere password)
- `POST /api/riot/refresh-tft` — refresca cache TFT sin password (busca en tier guardado + adyacentes)
- `GET /api/youtube/latest` — último video del canal

### Secrets del Worker
Configurar con `npx wrangler secret put <NOMBRE>`:
- `ADMIN_PWD_HASH` — SHA-256 hex de la contraseña admin
- `ANTHROPIC_KEY` — API key de Anthropic
- `YOUTUBE_CHANNEL` / `YOUTUBE_API_KEY` — YouTube
- `RIOT_API_KEY` — API key de Riot Games (dev key, expira cada 24h — renovar en developer.riotgames.com)

### Tablas D1 relevantes
- `jugadores`, `partidos`, `temporadas` — torneo FIFA18
- `equipos_custom` — equipos hardcodeados + custom se fusionan en `ALL_TEAMS` al init
- `riot_tft_cache` — cache de TFT ranked por PUUID (workaround: Riot API LA2 no tiene `by-puuid` para TFT)

## Integración Riot Games

### Problema de API
La región LAS (plataforma `la2`) migró a PUUID pero el TFT League API no tiene endpoint `by-puuid` aún:
- LoL: `GET /lol/league/v4/entries/by-puuid/{puuid}` → funciona ✓
- TFT: no existe `by-puuid` → se usa cache D1

### Cuentas vinculadas (`assets/js/games.js` → `RIOT_ACCOUNTS`)
```js
const RIOT_ACCOUNTS = {
  1: { gameName: 'WK Nais',      tagLine: 'LAS' },  // Axel
  8: { gameName: 'Zantisimo420', tagLine: 'LAS' },  // Chulo Z
};
```
Los IDs son los de la tabla `jugadores` en D1.

### Actualizar TFT cache manualmente
Si alguien sube/baja de tier (y el botón 🔄 del perfil no alcanza a encontrarlo):
```bash
curl -X POST https://tpc-worker.aburgos-44f.workers.dev/api/riot/scan-tft \
  -H "Content-Type: application/json" \
  -d '{"gameName":"Zantisimo420","tagLine":"LAS","tier":"PLATINUM","division":"IV","password":"..."}'
```

### Emblemas de rango
Se cargan desde Community Dragon:
`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/{tier_lowercase}.png`

## Fórmula de puntos FIFA18
```js
function calcPts(winnerStars, loserStars, gd) {
  let pts = 3;
  if (loserStars > winnerStars) pts += Math.floor((loserStars - winnerStars) / 1.5) * 0.5;
  pts += Math.floor(gd / 3) * 0.5;  // cada 3 goles de diferencia suma 0.5
  return Math.round(pts * 10) / 10;
}
```
