#!/bin/bash
# This script will build and deploy your Hugo site to GitHub Pages

# Display the current strategy
echo "Deployment strategy: Using public folder pushed to gh-pages branch"

# Clean up previous builds
echo "Cleaning up previous builds..."
rm -rf public/

# Build the site with Hugo to the public directory
echo "Building the site with Hugo..."
hugo --minify --config=config.toml

# Ensure CNAME file exists for custom domain
echo "Ensuring CNAME file exists..."
echo "chenterry.com" > public/CNAME

# Force pushing the public directory to the gh-pages branch
echo "Force pushing to gh-pages branch..."
cd public
rm -rf .git
git init
git add .
git commit -m "Update site - $(date)"
git branch -M gh-pages
git remote add origin https://github.com/terrylinhaochen/terrylinhaochen.github.io.git || true
git push -f origin gh-pages

echo "Done! Your site should be live at https://chenterry.com shortly."
echo "To check settings: https://github.com/terrylinhaochen/terrylinhaochen.github.io/settings/pages" 