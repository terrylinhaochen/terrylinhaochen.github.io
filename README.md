# Terry Chen's Personal Website

This is my personal website built with Hugo and the PaperMod theme, automatically deployed to GitHub Pages. The site includes a powerful version history system for tracking article changes over time.

## Table of Contents

- [Website Structure](#website-structure)
- [Quick Start](#quick-start)
- [Content Management](#content-management)
  - [Creating New Content](#creating-new-content)
  - [Editing Content](#editing-content)
  - [Version History System](#version-history-system)
  - [Archiving Content](#archiving-content)
- [Content Organization](#content-organization)
- [Images and Media](#images-and-media)
- [Site Configuration](#site-configuration)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Website Structure

Your website is organized into several main sections:

```
terrylinhaochen.github.io/
├── content/
│   ├── posts/           # Blog posts and articles
│   ├── main-themes/     # Main thematic content areas
│   ├── investing/       # Investment analysis and insights
│   ├── about/          # About pages and experience
│   │   ├── experience/ # Work experience pages
│   │   ├── research/   # Research projects
│   │   └── projects/   # Academic/research projects
│   ├── product/        # Product development content
│   └── archived/       # Archived content
├── scripts/            # Automation scripts
│   ├── v.sh           # Simple version creation
│   ├── version.sh     # Full version management
│   ├── create-post.sh # Content creation
│   └── archive.sh     # Content archiving
├── layouts/           # Custom templates
├── static/           # Images and static files
├── assets/           # CSS and processed assets
└── config.toml       # Site configuration
```

## Quick Start

### One-Time Setup
```bash
# Setup the simplified version command (optional)
./scripts/setup-version-alias.sh
source ~/.zshrc  # or restart terminal

# Start local development server
hugo server -D
```

### Daily Workflow
```bash
# 1. Edit any content file and save
# 2. Create a new version (if you want version tracking)
version "1.1" "Updated examples and analysis"

# 3. View changes locally
hugo server -D
```

## Content Management

### Creating New Content

#### Blog Posts
```bash
# Quick creation
./create-post.sh "Your Post Title"

# Manual creation: create content/posts/your-post.md
```

#### Other Content Types
- **Main Themes**: Add to `content/main-themes/`
- **Investing**: Add to `content/investing/` 
- **Product**: Add to `content/product/`
- **About/Experience**: Add to `content/about/experience/`

### Editing Content

All content is written in Markdown with YAML frontmatter:

```yaml
---
title: "Your Content Title"
description: "SEO description"
date: 2025-01-25
author: Terry Chen
tags: ["tag1", "tag2"]
keywords: ["keyword1", "keyword2"]
---

# Your Content

Write your content here using Markdown...
```

### Version History System

This site includes an automated version history system that tracks changes to your content over time.

#### How It Works
- **Git-based**: Leverages Git commits for version tracking
- **Automatic**: Script handles all the technical details
- **Reader-friendly**: Shows version history at bottom of posts
- **GitHub integration**: Readers can view exact changes via GitHub

#### Creating Versions

**Simple Method (Recommended):**
```bash
# Edit your content file and save
# Then run:
version "1.1" "Description of what you changed"
```

**Advanced Method:**
```bash
./scripts/version.sh content/posts/your-post.md "1.1" "Description of changes"
```

#### What Readers See
At the bottom of posts with version history:
```
📋 Version History

v1.1 (Jan 25, 2025) [🔗 View changes]
     Updated examples and improved analysis

v1.0 (Jan 15, 2025) [🔗 View changes]  
     Initial publication

💡 Click "View changes" to see exactly what changed between versions
```

#### Version History Features
- **No file duplication** - one file per post
- **Complete change tracking** - see exactly what changed
- **Professional presentation** - clean, accessible interface
- **GitHub integration** - leverage GitHub's diff viewer
- **SEO friendly** - only current versions indexed

### Archiving Content

Move older content to the archived section:

```bash
# Interactive archiving
./archive.sh

# Direct archiving
./archive-note.sh content/posts/old-post.md

# Tag-based archiving (keeps file in place)
./tag-as-archived.sh content/posts/old-post.md
```

## Content Organization

### Main Sections

**Posts** (`/posts/`): Blog posts and articles
- General thoughts and analysis
- Current and relevant content

**Main Themes** (`/main-themes/`): Core thematic areas
- Multi-agent systems
- Data insights  
- Tech history
- Human quirks

**Investing** (`/investing/`): Investment analysis
- Market analysis
- Technology trends
- Economic insights

**Product** (`/product/`): Product development
- Product strategy
- Development insights
- User experience

**About** (`/about/`): Personal and professional information
- Experience at companies
- Research projects  
- Academic work

**Archived** (`/archived/`): Historical content
- Older posts and projects
- Superseded content
- Historical reference

### Content Categories and Tags

Use tags and categories to organize content:
```yaml
tags: ["AI", "Product", "Analysis"]
categories: ["Technology"]
```

## Images and Media

### Image Organization
```
static/images/
├── posts/          # Blog post images
├── main-themes/    # Thematic content images  
├── investing/      # Investment content images
├── about/          # About section images
├── product/        # Product content images
└── archived/       # Archived content images
```

### Adding Images
```markdown
# Basic image
![Description](/images/posts/post-name/image.jpg)

# Figure with caption
{{< figure src="/images/posts/post-name/image.jpg" alt="Description" caption="Caption" >}}

# Cover image (in frontmatter)
cover:
    image: "/images/posts/post-name/cover.jpg"
    alt: "Cover Image"
    caption: "Caption"
```

### Image Galleries
```markdown
{{< gallery >}}
{{< figure src="/images/gallery1.jpg" alt="Image 1" >}}
{{< figure src="/images/gallery2.jpg" alt="Image 2" >}}
{{< /gallery >}}
```

## Site Configuration

### Main Settings (`config.toml`)

Key configuration areas:
- **Site identity**: Title, description, author
- **Navigation**: Menu structure and links
- **Social media**: Links and icons
- **Content sections**: What appears in lists and archives
- **Search**: Search functionality settings

### Custom Styling (`assets/css/extended/custom.css`)

Customize appearance:
```css
/* Example customizations */
body {
  font-size: 18px;
}

.post-title {
  color: #333;
}
```

### Menu Configuration
Add or modify navigation items:
```toml
[[menu.main]]
  identifier = "posts"
  name = "Posts"
  url = "/posts/"
  weight = 10
```

## Deployment

### Automatic Deployment
Your site deploys automatically via GitHub Actions when you push to the main branch.

### Manual Deployment
```bash
# Build and deploy
./reset-github-pages.sh

# Or manually:
hugo --minify
# Then commit and push the generated files
```

### GitHub Pages Settings
- **Source**: Deploy from `gh-pages` branch
- **Custom domain**: terrylinhaochen.github.io
- **HTTPS**: Enabled

## Troubleshooting

### Common Issues

**Content not showing up:**
- Check frontmatter syntax
- Ensure `draft: false` (or omit draft field)
- Verify file is in correct directory

**Images not displaying:**
- Verify path starts with `/images/`
- Check file exists in `static/images/`
- Ensure correct file permissions

**Version history not working:**
- Ensure script has execute permissions: `chmod +x scripts/v.sh`
- Check Git repository is properly initialized
- Verify frontmatter formatting

**Local development issues:**
- Restart Hugo server: `Ctrl+C` then `hugo server -D`
- Clear browser cache: `Cmd+Shift+R` (Mac) or `Ctrl+F5` (PC)
- Check for syntax errors in markdown files

**Deployment issues:**
- Check GitHub Actions logs
- Verify `gh-pages` branch settings
- Run `./reset-github-pages.sh` to force rebuild

### Getting Help

1. **Local testing**: Always test with `hugo server -D` before pushing
2. **Version control**: Use version history system to track changes
3. **GitHub integration**: Leverage GitHub's tools for collaboration and history
4. **Incremental changes**: Make small, focused changes to isolate issues

### Development Workflow

1. **Start development server**: `hugo server -D`
2. **Create/edit content**: Use scripts or edit files directly
3. **Test changes locally**: Preview at `http://localhost:1313`
4. **Create version**: `version "1.1" "Description"`
5. **Commit and push**: Git will handle deployment automatically

This setup provides a professional, maintainable blog with powerful version tracking and easy content management.