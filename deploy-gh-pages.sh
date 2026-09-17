#!/bin/bash
# Deploy to GitHub Pages
set -e

echo "Building with GitHub Pages base path..."
BASE_PATH=/portfolio/ npm run build

echo "Pushing to gh-pages..."
TMPDIR=$(mktemp -d)
cp -r docs/* "$TMPDIR/"
cd "$TMPDIR"
git init -q
git checkout -q --orphan gh-pages
git add -A
git commit -q -m "deploy: update site"
git remote add origin git@github.com:ItokianaRAKT/portfolio.git
git push -f origin gh-pages
cd -
rm -rf "$TMPDIR"

echo "Rebuilding for local/Vercel..."
npm run build

echo "Done! GitHub Pages updated."
