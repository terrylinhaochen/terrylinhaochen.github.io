# Terry Chen's Personal Website

This is my personal website built with Hugo and the PaperMod theme, automatically deployed to GitHub Pages.

## Table of Contents

- [File Structure Overview](#file-structure-overview)
- [Basic Commands](#basic-commands)
- [Creating Content](#creating-content)
  - [Creating Posts](#creating-posts)
  - [Creating Projects](#creating-projects)
  - [Creating Travel Pages](#creating-travel-pages)
- [Editing Content](#editing-content)
- [Working with Images](#working-with-images)
- [Site Configuration](#site-configuration)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## File Structure Overview

```
terrylinhaochen.github.io/          # Root directory of the project
├── .github/                        # GitHub configuration
│   └── workflows/                  # GitHub Actions workflows
│       └── hugo.yml                # Configuration for automated deployment
├── archetypes/                     # Template files for new content
│   └── default.md                  # Default template for new content
├── assets/                         # CSS, JS, and other assets that need processing
│   └── css/
│       └── extended/
│           └── custom.css          # Custom CSS overrides
├── content/                        # Where all your content lives
│   ├── _index.md                   # Homepage content
│   ├── about.md                    # About page
│   ├── posts/                      # Blog posts
│   │   └── *.md                    # Individual post files
│   ├── projects/                   # Project pages
│   │   ├── _index.md               # Projects section landing page
│   │   └── *.md                    # Individual project files
│   ├── search.md                   # Search page
│   └── travel/                     # Travel posts
│       ├── _index.md               # Travel section landing page
│       └── *.md                    # Individual travel posts
├── layouts/                        # Custom templates that override theme defaults
│   ├── _default/                   # Default layouts
│   │   ├── list/                   # List page layouts
│   │   └── section/                # Section page layouts
│   ├── partials/                   # Partial templates (header, footer, etc.)
│   │   ├── footer.html             # Custom footer
│   │   ├── home_info.html          # Home page info section
│   │   └── post_meta.html          # Post metadata display
│   ├── shortcodes/                 # Custom shortcodes
│   │   └── gallery.html            # Gallery shortcode
│   └── index.html                  # Homepage template
├── static/                         # Static files (images, downloads, etc.)
│   └── images/                     # Images organized by content type
│       ├── posts/                  # Images for blog posts
│       ├── projects/               # Images for projects
│       └── travel/                 # Images for travel posts
├── themes/                         # Hugo themes
│   └── PaperMod/                   # PaperMod theme
├── .gitignore                      # Files to ignore in Git
├── create-post.sh                  # Script to create new posts
├── hugo.yaml                       # Main Hugo configuration file
└── README.md                       # This file
```

## Basic Commands

```bash
# Start local development server (with drafts enabled)
cd /Users/terry/Desktop/terrylinhaochen.github.io && hugo server -D

# Build site for production (this is automatically done by GitHub Actions)
hugo --minify

# Create a new post using the script
./create-post.sh "Your Post Title"

# Create a new project using the script
./create-post.sh "Your Project Title" projects

# Create a new travel post using the script
./create-post.sh "Your Travel Title" travel
```

## Creating Content

### Creating Posts

#### Using the script:

```bash
./create-post.sh "My New Blog Post"
```

This will:
- Create a new markdown file in `content/posts/YYYY-MM-DD-my-new-blog-post.md`
- Create an image directory at `static/images/posts/my-new-blog-post/`

#### Manually:

Create a file in `content/posts/` with this frontmatter:

```yaml
---
title: "My New Blog Post"
date: 2024-03-24
description: "A brief description of your post"
tags: ["tag1", "tag2"]
categories: ["category"]
# Optional: mark as featured to display on homepage
featured: true
# Optional: add a cover image
cover:
    image: "/images/posts/my-post/cover.jpg"
    alt: "Cover Image"
    caption: "Image Caption"
draft: false  # Set to true if not ready to publish
---

Your content here...
```

### Creating Projects

#### Using the script:

```bash
./create-post.sh "My New Project" projects
```

#### Manually:

Create a file in `content/projects/` with this frontmatter:

```yaml
---
title: "My New Project"
date: 2024-03-24
description: "Project description"
categories: ["work"]  # or ["prototype"], etc.
projectURL: "https://example.com"  # Optional
cover:
    image: "/images/projects/my-project/cover.jpg"
    alt: "Project Cover Image"
draft: false
---

Project details here...
```

### Creating Travel Pages

#### Using the script:

```bash
./create-post.sh "My Travel Destination" travel
```

#### Manually:

Create a file in `content/travel/` with this frontmatter:

```yaml
---
title: "Travel Destination"
date: 2024-03-24
location: "City, Country"
categories: ["Country"] # Used for grouping
description: "Brief description"
---

Travel details and experiences here...
```

## Editing Content

1. All content is written in Markdown (.md files) located in the `content/` directory.
2. To edit existing content, open the corresponding `.md` file.
3. The content between the `---` markers at the top is called "frontmatter" and contains metadata about the page.
4. The rest of the file is your content, written in Markdown.

### Markdown Basics

```markdown
# Heading 1
## Heading 2
### Heading 3

Regular paragraph text

**Bold text**
*Italic text*

[Link text](https://example.com)

![Image alt text](/images/path-to-image.jpg)

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

> Blockquote text

```

### Deleting Content

Simply delete the markdown file from the appropriate directory:
- Posts: `content/posts/your-post.md`
- Projects: `content/projects/your-project.md`
- Travel: `content/travel/your-travel-post.md`

## Working with Images

### Adding Images

1. **Store images** in the appropriate directory:
   - For posts: `static/images/posts/post-name/`
   - For projects: `static/images/projects/project-name/`
   - For travel: `static/images/travel/destination-name/`
   - For general use: `static/images/`

2. **Reference images** in your markdown:
   ```markdown
   ![Image Description](/images/posts/post-name/image.jpg)
   ```

3. **Using the Figure shortcode** for more control:
   ```markdown
   {{< figure src="/images/posts/post-name/image.jpg" alt="Description" caption="Caption" >}}
   ```

4. **Creating a gallery**:
   ```markdown
   {{< gallery >}}
   {{< figure src="/images/gallery1.jpg" alt="Gallery Image 1" >}}
   {{< figure src="/images/gallery2.jpg" alt="Gallery Image 2" >}}
   {{< figure src="/images/gallery3.jpg" alt="Gallery Image 3" >}}
   {{< /gallery >}}
   ```

### Cover Images

Add a cover image to any content by including in the frontmatter:
```yaml
cover:
    image: "/images/posts/post-name/cover.jpg"
    alt: "Cover Image"
    caption: "Optional caption"
    relative: false  # Use false for /static directory
    hidden: false    # Display on post page
    hiddenInList: false  # Display in post lists
```

## Site Configuration

### Main Configuration: `hugo.yaml`

Key settings you might want to modify:
- `title`: Site title
- `params.description`: Site description
- `params.homeInfoParams`: Welcome section content
- `params.socialIcons`: Social media links
- `menu.main`: Navigation menu items

Example of updating the site description:

```yaml
params:
  description: "Your new site description goes here"
```

### Custom CSS: `assets/css/extended/custom.css`

Edit this file to customize the site's appearance. For example:

```css
/* Increase font size for better readability */
body {
  font-size: 18px;
}

/* Change colors for links */
a {
  color: #0077cc;
}

a:hover {
  color: #005599;
}
```

## Deployment

Your site is configured to automatically deploy to GitHub Pages:

1. Any changes you push to the `main` branch will trigger a GitHub Actions workflow
2. The workflow will build your Hugo site and deploy it to GitHub Pages
3. You can view your deployed site at: https://terrylinhaochen.github.io/

### Deployment Process

1. **Make changes to your site locally**
   ```bash
   # Edit files in your text editor
   ```

2. **Preview changes locally with:**
   ```bash
   hugo server -D
   ```

3. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```

4. **Wait for GitHub Actions to deploy**
   - Check your repository's Actions tab to see build progress: https://github.com/terrylinhaochen/terrylinhaochen.github.io/actions
   - After successful deployment, your changes will be live

## Troubleshooting

### Common Issues

1. **Changes not showing up locally:**
   - Make sure the Hugo server is running with `-D` to show draft posts
   - Check for syntax errors in your markdown files
   - Try restarting the Hugo server (`Ctrl+C` to stop, then run `hugo server -D` again)

2. **Image not displaying:**
   - Verify the path is correct (starts with `/images/`)
   - Check that the image exists in the right directory in `static/`
   - Ensure proper file permissions

3. **Theme changes not applying:**
   - Ensure you're modifying the correct file in `assets/css/extended/custom.css`
   - Check that your CSS selectors are specific enough to override theme defaults

4. **Deployment failures:**
   - Check the GitHub Actions logs for errors
   - Ensure your Hugo version in `.github/workflows/hugo.yml` matches your local version
   - Verify there are no invalid front matter or syntax issues in your markdown files

### Local Development Tips

- Use `hugo server -D --navigateToChanged` to automatically navigate to changed pages
- Enable drafts with `-D` to preview content that's not ready for publishing
- Add `draft: true` to frontmatter for content you don't want published yet
