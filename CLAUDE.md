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
