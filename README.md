# The Pot Club — Proyecto Web

## Estructura

```
tpc-project/
├── index.html          → Landing principal (thepot-club.com)
├── games/
│   ├── fifa18.html     → Torneo FIFA 18 (thepot-club.com/games)
│   └── tpc-games.html  → Plataforma general TPC Games (en desarrollo)
└── README.md
```

## URLs de producción

| Archivo | URL |
|---|---|
| `index.html` | https://thepot-club.com |
| `games/fifa18.html` | https://thepot-club.com/games |

## Backend

- **Worker**: `https://tpc-worker.aburgos-44f.workers.dev`
- **BD D1 FIFA**: `tpc-fifa18` (7cff90ca-b5de-4c97-822f-435fdcf639f1)
- **BD D1 Club**: `tpc-club` (5636e4aa-d013-4eaf-abd5-90207794bd0b)

## Rutas del Worker

| Ruta | Método | Descripción |
|---|---|---|
| `/api/estado` | GET | Jugadores + partidos + temporada activa |
| `/api/jugadores` | POST | Agregar jugador (requiere password) |
| `/api/jugadores/:id` | DELETE | Eliminar jugador |
| `/api/partidos` | POST | Cargar partido |
| `/api/partidos/:id` | DELETE | Eliminar partido |
| `/api/youtube` | GET | Videos del canal TPC |

## Paleta de colores TPC

```css
--white:  #FFFFFF
--terra:  #BA7865
--red:    #6E312C
--dark:   #381809
--bg:     #1a0c08
```

## Setup local

1. Abrir esta carpeta en VS Code
2. Instalar extensión **Live Server** (Ritwick Dey)
3. Click derecho en cualquier HTML → **Open with Live Server**
4. Abre en `localhost:5500`

## Para testear con datos reales

El `tpc-games.html` usa datos demo hardcodeados por defecto.
Para conectar al Worker real, cambiar en el JS:
```js
const WORKER_URL = 'https://tpc-worker.aburgos-44f.workers.dev';
```
Y descomentar la llamada a `init()` en lugar de `loadDemoData()`.
