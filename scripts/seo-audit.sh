#!/bin/bash

# SEO Audit Script for Hugo Site
# This script checks for common SEO issues and provides recommendations

echo "🔍 Starting SEO Audit for Terry Chen's Website"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "config.toml" ]; then
    echo "❌ Error: config.toml not found. Please run this script from the site root."
    exit 1
fi

echo ""
echo "📋 Checking Configuration Files..."

# Check config.toml for SEO settings
echo "✅ Config.toml found"
if grep -q "enableRobotsTXT = true" config.toml; then
    echo "✅ Robots.txt enabled"
else
    echo "⚠️  Robots.txt not enabled in config.toml"
fi

if grep -q "sitemap" config.toml; then
    echo "✅ Sitemap configuration found"
else
    echo "⚠️  Sitemap configuration missing"
fi

# Check for robots.txt
if [ -f "static/robots.txt" ]; then
    echo "✅ Robots.txt file exists"
else
    echo "❌ Robots.txt file missing"
fi

# Check for sitemap
if [ -f "public/sitemap.xml" ]; then
    echo "✅ Sitemap.xml exists in public directory"
else
    echo "⚠️  Sitemap.xml not found in public directory (may be generated during build)"
fi

# Check for manifest.json
if [ -f "static/manifest.json" ]; then
    echo "✅ Web app manifest exists"
else
    echo "❌ Web app manifest missing"
fi

echo ""
echo "📄 Checking Content Files..."

# Count content files by section
echo "📊 Content Statistics:"
echo "  Posts: $(find content/posts -name "*.md" | wc -l | tr -d ' ') files"
echo "  Product: $(find content/product -name "*.md" | wc -l | tr -d ' ') files"
echo "  Investing: $(find content/investing -name "*.md" | wc -l | tr -d ' ') files"
echo "  Archived: $(find content/archived -name "*.md" | wc -l | tr -d ' ') files"

echo ""
echo "🔍 Checking for SEO Frontmatter..."

# Check for missing descriptions
echo "📝 Checking for missing descriptions:"
missing_desc=0
for file in $(find content -name "*.md" -not -path "*/archived/*"); do
    if ! grep -q "^description:" "$file"; then
        echo "  ⚠️  Missing description: $file"
        ((missing_desc++))
    fi
done

if [ $missing_desc -eq 0 ]; then
    echo "  ✅ All content files have descriptions"
else
    echo "  📊 Total files missing descriptions: $missing_desc"
fi

# Check for missing keywords
echo ""
echo "🏷️  Checking for missing keywords:"
missing_keywords=0
for file in $(find content -name "*.md" -not -path "*/archived/*"); do
    if ! grep -q "^keywords:" "$file"; then
        echo "  ⚠️  Missing keywords: $file"
        ((missing_keywords++))
    fi
done

if [ $missing_keywords -eq 0 ]; then
    echo "  ✅ All content files have keywords"
else
    echo "  📊 Total files missing keywords: $missing_keywords"
fi

# Check for missing tags
echo ""
echo "🏷️  Checking for missing tags:"
missing_tags=0
for file in $(find content -name "*.md" -not -path "*/archived/*"); do
    if ! grep -q "^tags:" "$file"; then
        echo "  ⚠️  Missing tags: $file"
        ((missing_tags++))
    fi
done

if [ $missing_tags -eq 0 ]; then
    echo "  ✅ All content files have tags"
else
    echo "  📊 Total files missing tags: $missing_tags"
fi

echo ""
echo "📱 Checking Mobile SEO..."

# Check for viewport meta tag in head template
if grep -q "viewport" layouts/partials/head.html; then
    echo "✅ Viewport meta tag found"
else
    echo "❌ Viewport meta tag missing"
fi

# Check for theme-color meta tag
if grep -q "theme-color" layouts/partials/head.html; then
    echo "✅ Theme color meta tag found"
else
    echo "❌ Theme color meta tag missing"
fi

echo ""
echo "🔗 Checking Internal Linking..."

# Check for broken internal links (basic check)
echo "📊 Internal link analysis:"
internal_links=$(grep -r "\[.*\](" content/ | grep -v "http" | wc -l | tr -d ' ')
echo "  Internal links found: $internal_links"

echo ""
echo "📈 SEO Recommendations:"
echo "======================"

if [ $missing_desc -gt 0 ]; then
    echo "1. Add descriptions to all content files"
fi

if [ $missing_keywords -gt 0 ]; then
    echo "2. Add keywords to all content files"
fi

if [ $missing_tags -gt 0 ]; then
    echo "3. Add tags to all content files"
fi

echo "4. Consider adding structured data for specific content types"
echo "5. Optimize images with alt text and proper sizing"
echo "6. Ensure all pages have proper heading hierarchy (H1, H2, H3)"
echo "7. Add internal linking between related content"
echo "8. Consider implementing breadcrumbs for better navigation"
echo "9. Monitor Core Web Vitals and page speed"
echo "10. Set up Google Search Console and submit sitemap"

echo ""
echo "✅ SEO Audit Complete!"
echo ""
echo "Next Steps:"
echo "1. Build the site: hugo"
echo "2. Test locally: hugo server"
echo "3. Submit sitemap to search engines"
echo "4. Monitor search console for issues" 