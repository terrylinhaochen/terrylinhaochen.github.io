---
title: "How to Archive Content"
date: 2023-01-01
summary: "A guide on how to move content to the archived section"
---

# How to Archive Content

This guide explains the different ways to archive content on this site.

## Method 1: Using the Archive Script (Recommended)

The easiest way to archive content is to use the provided script:

```bash
# Navigate to your site directory
cd /Users/terry/Desktop/terrylinhaochen.github.io

# Run the archive script
./archive-note.sh content/posts/post-to-archive.md
```

This will move the specified file to the archived section and offer to commit the change.

## Method 2: Manual Move

You can also manually move files:

1. Find the file you want to archive in `content/posts/` or `content/projects/`
2. Move it to `content/archived/`
3. The content will automatically appear in the Archived section

## Method 3: Using the "archived" Tag

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

## After Archiving

After archiving content, you should:

1. Run `hugo server -D` to preview the changes locally
2. Commit and push your changes to update the live site:
   ```bash
   git add .
   git commit -m "Archive old content"
   git push
   ```

3. Visit [/archived/](https://terrylinhaochen.github.io/archived/) to see your archived content 