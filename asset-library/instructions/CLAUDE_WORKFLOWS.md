# Claude Workflows and Instructions

## Asset Library Usage Guidelines

### Quick Reference Commands
```bash
# Navigate to asset library
cd asset-library

# Quick note creation
echo "# New Note\n\n[content]" > notes/[filename].md

# Image organization
cp [source] images/assets/[descriptive-name].[ext]
cp [brand-file] images/brand-kit/[brand-asset].[ext]

# Template usage
cp instructions/templates/[template].md content/posts/[new-post].md
```

## Content Creation Workflows

### Blog Post Creation Process
1. **Research Phase**
   - Save research notes to `notes/research/[topic].md`
   - Save relevant images to `images/assets/[topic]/`
   - Use templates from `templates/posts/`

2. **Drafting Phase**
   - Create draft in `notes/drafts/[post-title].md`
   - Reference images using relative paths
   - Use consistent frontmatter from templates

3. **Publishing Phase**
   - Move final draft to `content/posts/`
   - Update image paths to `/images/`
   - Verify all assets are properly linked

### Note-Taking Standards
- Use markdown format for all notes
- Include date stamps: `YYYY-MM-DD`
- Tag notes with categories: `#research #ideas #draft`
- Link related notes using `[[note-name]]` syntax

## Image Management

### File Naming Convention
```
[category]-[description]-[date].[ext]
```
Examples:
- `research-ai-trends-2025-11-01.png`
- `diagram-system-architecture-2025-11-01.svg`
- `screenshot-competitor-analysis-2025-11-01.jpg`

### Image Categories
- **screenshots**: UI captures, tool interfaces
- **diagrams**: System designs, flowcharts, wireframes
- **photos**: Personal photos, event images
- **assets**: Blog post images, graphics, icons

## Claude-Specific Instructions

### When Creating Content
1. **Always check asset library first** for existing research, templates, or related notes
2. **Reference existing images** from the library when relevant
3. **Save new research** to appropriate notes folders
4. **Use consistent formatting** from templates

### Asset Integration Commands
```markdown
# Check for existing research
Read asset-library/notes/research/[topic].md

# Use post template
Read asset-library/templates/posts/standard-post.md

# Reference images properly
![Description](/images/[category]/[filename])
```

### Memory and Context Management
- Save important project context to `notes/project-ideas/`
- Store meeting notes and decisions in `notes/meeting-notes/`
- Keep reference materials in `references/`

## Templates Available

### Blog Post Templates
- `standard-post.md`: Basic blog post structure
- `technical-post.md`: Code-heavy posts with syntax highlighting
- `research-post.md`: Research-based posts with citations
- `review-post.md`: Product/service review format

### Note Templates
- `research-note.md`: Structured research documentation
- `meeting-note.md`: Meeting minutes and action items
- `idea-capture.md`: Quick idea documentation

## Integration with Existing Tools

### Hugo Integration
- Images in `asset-library/images/` should be copied to `static/images/` for production
- Templates can be adapted for Hugo's frontmatter requirements
- Use Hugo's image processing for optimization

### Git Workflow
```bash
# Regular asset backup
git add asset-library/
git commit -m "Update asset library: [description]"

# Exclude large binary files if needed
echo "asset-library/images/*.psd" >> .gitignore
```

## Automation Scripts

### Quick Post Creation
```bash
#!/bin/bash
# create-post-from-template.sh
TITLE="$1"
TEMPLATE="$2"
DATE=$(date +%Y-%m-%d)

cp "asset-library/templates/posts/${TEMPLATE}.md" "content/posts/${TITLE}.md"
sed -i "s/DATE_PLACEHOLDER/${DATE}/g" "content/posts/${TITLE}.md"
```

### Image Optimization
```bash
#!/bin/bash
# optimize-images.sh
for img in asset-library/images/**/*; do
  if [[ $img == *.jpg ]] || [[ $img == *.png ]]; then
    # Add your image optimization commands here
    echo "Optimizing $img"
  fi
done
```

## Best Practices

### For Claude Interactions
1. **Always reference the asset library** when starting new content
2. **Save valuable research** immediately to appropriate folders
3. **Use consistent file naming** for easy retrieval
4. **Link related assets** explicitly in notes

### For Content Quality
1. **Verify image licensing** before adding to library
2. **Compress images** appropriately for web use
3. **Use descriptive filenames** for searchability
4. **Maintain template consistency**

### For Organization
1. **Regular cleanup** of outdated notes and images
2. **Archive completed projects** to prevent clutter
3. **Update templates** based on evolving needs
4. **Document decisions** in meeting notes

## Troubleshooting

### Common Issues
- **Broken image links**: Check file paths and naming conventions
- **Missing templates**: Verify template exists in correct folder
- **Large repository size**: Review image compression and .gitignore

### Recovery Procedures
- **Lost notes**: Check git history for recovery
- **Corrupted images**: Restore from backup or regenerate
- **Template conflicts**: Use base template and customize

## Extensions and Integrations

### Potential Enhancements
- **Search functionality**: Add grep/ripgrep aliases for content search
- **Image tagging**: Metadata system for better organization
- **Auto-linking**: Script to automatically link related notes
- **Backup automation**: Regular cloud sync for asset library

### Third-Party Tools
- **Image optimization**: ImageOptim, TinyPNG
- **Note linking**: Obsidian, Roam Research compatibility
- **Version control**: Git LFS for large assets
- **Search**: Spotlight, Alfred integration