#!/bin/bash
# This script will help reset GitHub Pages settings

# Clean up any old files that might be causing issues
echo "Cleaning up the public directory..."
rm -rf public/*

# Build the site with Hugo
echo "Building the site with Hugo..."
hugo --minify --config=config.toml

# Force pushing the public directory to the gh-pages branch
echo "Force pushing to gh-pages branch..."
cd public
rm -rf .git
git init
git add .
git commit -m "Reset GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/terrylinhaochen/terrylinhaochen.github.io.git || true
git push -f origin gh-pages

echo "Done! Now go to your GitHub repository settings and ensure GitHub Pages is set to deploy from the gh-pages branch."
echo "Open: https://github.com/terrylinhaochen/terrylinhaochen.github.io/settings/pages" 