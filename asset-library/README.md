# Asset Library

A centralized repository for notes, images, templates, and instructions to streamline content creation and project management.

## Structure

```
asset-library/
├── notes/              # All notes (research, ideas, drafts)
├── images/
│   ├── assets/         # General images, blog assets, graphics
│   └── brand-kit/      # Logos, brand assets, style guides
└── instructions/
    ├── CLAUDE_WORKFLOWS.md    # Claude usage guidelines
    ├── templates/      # Templates for posts and notes
    ├── content_kit/    # Content guidelines, style guides, reference materials
    └── agents/         # AI agent prompts and configurations
```

## Quick Start

### Creating a New Post
1. Copy template: `cp instructions/templates/standard-post.md content/posts/[title].md`
2. Fill in placeholders and content
3. Add any images to `images/assets/`

### Taking Notes
1. Use templates from `instructions/templates/`
2. Save to `notes/` with descriptive filename
3. Include date and tags for organization

### Managing Images
- **General assets**: Save to `images/assets/`
- **Brand materials**: Save to `images/brand-kit/`
- Use descriptive filenames with dates

## Templates Available

- **standard-post.md**: Basic blog post structure
- **research-note.md**: Structured research documentation  
- **idea-capture.md**: Quick idea documentation

## Usage with Claude

Before starting work, Claude should:
1. Check `notes/` for existing research
2. Use templates from `instructions/templates/`
3. Reference images from `images/`
4. Follow guidelines in `instructions/CLAUDE_WORKFLOWS.md`

## File Naming

Use clear, descriptive names with dates:
- Notes: `[topic]-[date].md`
- Images: `[description]-[date].[ext]`
- Posts: `[title-slug].md`

## Maintenance

- Regular cleanup of outdated files
- Compress images for web use
- Update templates as needed
- Archive completed projects