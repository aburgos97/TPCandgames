#!/bin/bash
set -e

echo "Mergeando develop → main y pusheando a producción..."

git checkout main
git merge develop --no-edit
git push origin main
git checkout develop

echo "Deploy completado. Cloudflare Pages tomará el cambio automáticamente."
