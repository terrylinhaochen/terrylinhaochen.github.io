#!/bin/bash

# Migration script for converting Jekyll content to Hugo format

# Set the source and destination directories
JEKYLL_DIR="/Users/terry/Desktop/terrylinhaochen.github.io"
HUGO_DIR="/Users/terry/Desktop/hugo-site"

# Create necessary directories if they don't exist
mkdir -p "$HUGO_DIR/content/posts"
mkdir -p "$HUGO_DIR/content/projects"
mkdir -p "$HUGO_DIR/content/travel"
mkdir -p "$HUGO_DIR/static/images/posts"
mkdir -p "$HUGO_DIR/static/images/projects"
mkdir -p "$HUGO_DIR/static/images/travel"
mkdir -p "$HUGO_DIR/assets/css/extended"

echo "Starting migration from Jekyll to Hugo..."

# Migrate posts
echo "Migrating posts..."
for file in "$JEKYLL_DIR/_posts/"*.md; do
  filename=$(basename "$file")
  # Extract date and title from filename
  if [[ $filename =~ ^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})-(.*).md$ ]]; then
    date="${BASH_REMATCH[1]}"
    title="${BASH_REMATCH[2]}"
    # Replace spaces with hyphens and convert to lowercase for slug
    slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    # Create the destination file
    dest_file="$HUGO_DIR/content/posts/$date-$slug.md"
    
    # Create image directory for the post
    mkdir -p "$HUGO_DIR/static/images/posts/$slug"
    
    # Convert Jekyll frontmatter to Hugo frontmatter
    awk -v date="$date" -v title="$title" '
    BEGIN { in_frontmatter = 0; frontmatter_done = 0; }
    /^---$/ { 
      if (in_frontmatter == 0) {
        in_frontmatter = 1;
        print "---";
        next;
      } else {
        in_frontmatter = 0;
        frontmatter_done = 1;
        print "---";
        next;
      }
    }
    {
      if (in_frontmatter) {
        if ($0 ~ /^layout:/) {
          # Skip layout
        } else if ($0 ~ /^title:/) {
          print $0;
        } else if ($0 ~ /^date:/) {
          print $0;
        } else if ($0 ~ /^author:/) {
          print $0;
        } else if ($0 ~ /^categories:/) {
          gsub(/categories:/, "categories:", $0);
          print $0;
        } else if ($0 ~ /^tags:/) {
          print $0;
        } else {
          print $0;
        }
      } else {
        print $0;
      }
    }' "$file" > "$dest_file"
    
    echo "  Migrated: $filename -> $dest_file"
  fi
done

# Migrate projects
echo "Migrating projects..."
for file in "$JEKYLL_DIR/_projects/"*.md; do
  filename=$(basename "$file")
  # Extract project name from filename
  if [[ $filename =~ ^project-(.*).md$ ]]; then
    project="${BASH_REMATCH[1]}"
    # Create slug from project name
    slug=$(echo "$project" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    
    # Create the destination file
    dest_file="$HUGO_DIR/content/projects/$slug.md"
    
    # Create image directory for the project
    mkdir -p "$HUGO_DIR/static/images/projects/$slug"
    
    # Convert Jekyll frontmatter to Hugo frontmatter
    awk '
    BEGIN { in_frontmatter = 0; frontmatter_done = 0; }
    /^---$/ { 
      if (in_frontmatter == 0) {
        in_frontmatter = 1;
        print "---";
        next;
      } else {
        in_frontmatter = 0;
        frontmatter_done = 1;
        print "---";
        next;
      }
    }
    {
      if (in_frontmatter) {
        if ($0 ~ /^layout:/) {
          # Skip layout
        } else if ($0 ~ /^title:/) {
          print $0;
        } else if ($0 ~ /^date:/) {
          print $0;
        } else if ($0 ~ /^category:/) {
          gsub(/category:/, "categories:", $0);
          print $0;
        } else if ($0 ~ /^url:/) {
          gsub(/url:/, "projectURL:", $0);
          print $0;
        } else {
          print $0;
        }
      } else {
        print $0;
      }
    }' "$file" > "$dest_file"
    
    echo "  Migrated: $filename -> $dest_file"
  fi
done

# Migrate travel posts
echo "Migrating travel posts..."
for file in "$JEKYLL_DIR/_travel/"*.md; do
  filename=$(basename "$file")
  # Extract location from filename
  if [[ $filename =~ ^(.*-.*).md$ ]]; then
    location="${BASH_REMATCH[1]}"
    # Create slug from location
    slug=$(echo "$location" | tr '[:upper:]' '[:lower:]')
    
    # Create the destination file
    dest_file="$HUGO_DIR/content/travel/$slug.md"
    
    # Create image directory for the travel post
    mkdir -p "$HUGO_DIR/static/images/travel/$slug"
    
    # Convert Jekyll frontmatter to Hugo frontmatter
    awk '
    BEGIN { in_frontmatter = 0; frontmatter_done = 0; }
    /^---$/ { 
      if (in_frontmatter == 0) {
        in_frontmatter = 1;
        print "---";
        next;
      } else {
        in_frontmatter = 0;
        frontmatter_done = 1;
        print "---";
        next;
      }
    }
    {
      if (in_frontmatter) {
        if ($0 ~ /^layout:/) {
          # Skip layout
        } else if ($0 ~ /^title:/) {
          print $0;
        } else if ($0 ~ /^location:/) {
          print $0;
        } else if ($0 ~ /^category:/) {
          gsub(/category:/, "categories:", $0);
          print $0;
        } else if ($0 ~ /^excerpt:/) {
          gsub(/excerpt:/, "description:", $0);
          print $0;
        } else {
          print $0;
        }
      } else {
        print $0;
      }
    }' "$file" > "$dest_file"
    
    echo "  Migrated: $filename -> $dest_file"
  fi
done

# Copy assets directory (if it exists)
if [ -d "$JEKYLL_DIR/assets" ]; then
  echo "Copying assets..."
  cp -r "$JEKYLL_DIR/assets/"* "$HUGO_DIR/static/"
fi

# Create a custom CSS file for preserving your styles
echo "Creating custom CSS file..."
cat > "$HUGO_DIR/assets/css/extended/custom.css" << EOF
/* Custom CSS migrated from Jekyll site */
/* Add your custom styles here to match your previous design */

/* Project cards styling */
.project-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1.5rem;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Travel styling */
.country-header {
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
  color: #333;
}

/* Search styling */
.search-result {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
EOF

# Modify the config file to enable the search
echo "Updating Hugo configuration..."
cat >> "$HUGO_DIR/hugo.yaml" << EOF

# Enable Fuse.js search
outputs:
  home:
    - HTML
    - RSS
    - JSON
EOF

# Create index page with your welcome message
echo "Creating home page..."
cat > "$HUGO_DIR/content/_index.md" << EOF
---
title: "Terry's Blog"
description: "Hi, this is Terry. I'm documenting my product ideas and learning notes in this blog."
---

## 👋 Welcome to Terry's Blog

I'm interested in creating new user experiences through generative AI, focusing on synthesized content generation and actionable insight extraction.
EOF

# Create project index page
cat > "$HUGO_DIR/content/projects/_index.md" << EOF
---
title: "Projects"
description: "A showcase of my work across startups, professional projects, research, and prototypes"
---

Here are various projects I've worked on, from startups and professional work to research and prototypes.
EOF

# Create travel index page
cat > "$HUGO_DIR/content/travel/_index.md" << EOF
---
title: "Travel"
description: "Places I've visited and experiences I've had around the world"
---

Documenting things I find interesting during my travels.
EOF

echo "Migration complete!"
echo ""
echo "Next steps:"
echo "1. Review the migrated content and make any necessary adjustments"
echo "2. Test the site locally with 'hugo server -D'"
echo "3. Deploy your site by running 'hugo' and uploading the 'public' directory" 