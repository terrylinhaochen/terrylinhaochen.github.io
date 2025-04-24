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
- [Archiving Content](#archiving-content)
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
│   ├── archived/                   # Archived content
│   │   ├── _index.md               # Archived section landing page
│   │   └── *.md                    # Individual archived files
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
├── archive.sh                      # Main archiving script with menu options
├── archive-note.sh                 # Script to move content to archived section
├── tag-as-archived.sh              # Script to tag content as archived
├── create-post.sh                  # Script to create new posts
├── reset-github-pages.sh           # Script to reset and deploy to GitHub Pages
├── config.toml                     # Main Hugo configuration file
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

# Archive a post using the interactive menu
./archive.sh

# Archive a post by moving it to the archived section
./archive-note.sh content/posts/post-to-archive.md

# Archive a post by tagging it without moving
./tag-as-archived.sh content/posts/post-to-archive.md

# Deploy to GitHub Pages
./reset-github-pages.sh
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

## Archiving Content

Instead of deleting old content, you can archive it to keep it accessible but separate from your current content.

### Method 1: Using the Archive Script (Recommended)

The easiest way to archive content is to use the provided script:

```bash
# Navigate to your site directory
cd /Users/terry/Desktop/terrylinhaochen.github.io

# Run the archive script
./archive-note.sh content/posts/post-to-archive.md
```

This will move the specified file to the archived section and offer to commit the change.

### Method 2: Manual Move

You can also manually move files:

1. Find the file you want to archive in `content/posts/` or `content/projects/`
2. Move it to `content/archived/`
3. The content will automatically appear in the Archived section

### Method 3: Using the "archived" Tag

If you don't want to move the file but still want it to appear in archives:

1. Open the markdown file you want to archive
2. Add `tags: ["archived"]` to the frontmatter
3. The content will remain in its original location but also appear as archived

Example:
```yaml
---
title: "My Old Project"
date: 2022-01-15
categories: ["projects"]
tags: ["archived", "other-tags"]
---
```

### After Archiving

After archiving content, you should:

1. Run `hugo server -D` to preview the changes locally
2. Commit and push your changes to update the live site:
   ```bash
   git add .
   git commit -m "Archive old content"
   git push
   ```

3. Visit [/archived/](https://terrylinhaochen.github.io/archived/) to see your archived content

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

### Main Configuration: `config.toml`

Key settings you might want to modify:
- `title`: Site title
- `params.description`: Site description
- `params.homeInfoParams`: Welcome section content
- `params.socialIcons`: Social media links
- `menu.main`: Navigation menu items (posts, projects, archived, search, about)
- `params.mainSections`: Content types to include in archives and listings (posts, projects, archived)

Example of updating the site description:

```toml
[params]
  description = "Your new site description goes here"
```

Example of menu configuration:

```toml
[menu]
  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    url = "/posts/"
    weight = 10
  [[menu.main]]
    identifier = "projects"
    name = "Projects"
    url = "/projects/"
    weight = 20
  [[menu.main]]
    identifier = "archived"
    name = "Archived"
    url = "/archived/"
    weight = 25
  [[menu.main]]
    identifier = "search"
    name = "Search"
    url = "/search/"
    weight = 30
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

Your site is configured to deploy to GitHub Pages from the `gh-pages` branch:

1. Any changes you make to your site content should be made in the `main` branch
2. After making changes, you need to build and deploy using the reset script:

```bash
# Make your content changes
# Then run the deployment script
./reset-github-pages.sh
```

3. The script will:
   - Clean the public directory
   - Build your site using Hugo
   - Push the generated content to the `gh-pages` branch
   - GitHub Pages will then serve your site from the `gh-pages` branch

### Important Settings
Make sure your GitHub Pages settings are configured to deploy from the `gh-pages` branch, not from GitHub Actions.

### Troubleshooting Deployment Issues
If your site is not updating or showing 404 errors for some pages:
1. Check that GitHub Pages is set to deploy from the `gh-pages` branch (not "GitHub Actions")
2. Run the `reset-github-pages.sh` script again to force a clean build and push
3. Wait a few minutes for GitHub's cache to update
4. Check browser cache by doing a hard refresh (Ctrl+F5 or Cmd+Shift+R)

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

4. **Archived content not showing up:**
   - Make sure `archived` is included in the `mainSections` parameter in your config file
   - Check that the `archived` menu item is properly configured in the menu section
   - Verify the page has the right frontmatter (if using tags for archiving)

5. **Deployment failures:**
   - Check the GitHub Actions logs for errors
   - Ensure your Hugo version in `.github/workflows/hugo.yml` matches your local version
   - Verify there are no invalid front matter or syntax issues in your markdown files

### Local Development Tips

- Use `hugo server -D --navigateToChanged` to automatically navigate to changed pages
- Enable drafts with `-D` to preview content that's not ready for publishing
- Add `draft: true` to frontmatter for content you don't want published yet
