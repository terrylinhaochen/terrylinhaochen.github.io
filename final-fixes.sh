#!/bin/bash

# Script to make final fixes to a Hugo site migrated from Jekyll

HUGO_DIR="/Users/terry/Desktop/hugo-site"

echo "Making final fixes to Hugo site..."

# Step 1: Make sure all date formats are correct by fixing any dates that might have been corrupted
for file in $(find "$HUGO_DIR/content" -name "*.md"); do
  # Create a temp file
  temp_file=$(mktemp)
  
  # Process the file to fix any date issues
  awk '
  BEGIN { in_frontmatter = 0; date_fixed = 0; }
  
  /^---$/ {
    if (in_frontmatter == 0) {
      in_frontmatter = 1;
    } else {
      in_frontmatter = 0;
    }
    print $0;
    next;
  }
  
  in_frontmatter == 1 && $0 ~ /^date:/ && $0 ~ /00-/ {
    # Fix dates that have "00" in them (invalid month)
    gsub(/00-/, "08-", $0); # Assuming August is correct
    print $0;
    date_fixed = 1;
    next;
  }
  
  { print $0; }
  ' "$file" > "$temp_file"
  
  # Only replace the file if changes were made
  if diff -q "$file" "$temp_file" >/dev/null; then
    rm "$temp_file"
  else
    mv "$temp_file" "$file"
    echo "Fixed date format in $file"
  fi
done

# Step 2: Ensure the layout templates are correctly configured
mkdir -p "$HUGO_DIR/layouts/_default/list"
mkdir -p "$HUGO_DIR/layouts/_default/section"

# Copy templates to appropriate locations if they don't exist
if [ -f "$HUGO_DIR/layouts/_default/projects.html" ] && [ ! -f "$HUGO_DIR/layouts/_default/section/projects.html" ]; then
  cp "$HUGO_DIR/layouts/_default/projects.html" "$HUGO_DIR/layouts/_default/section/projects.html"
  echo "Created section template for projects"
fi

if [ -f "$HUGO_DIR/layouts/_default/travel.html" ] && [ ! -f "$HUGO_DIR/layouts/_default/section/travel.html" ]; then
  cp "$HUGO_DIR/layouts/_default/travel.html" "$HUGO_DIR/layouts/_default/section/travel.html"
  echo "Created section template for travel"
fi

# Step 3: Add the correct front matter to content files without it
for file in $(find "$HUGO_DIR/content/projects" -name "*.md"); do
  # Skip _index.md files
  if [[ $(basename "$file") == "_index.md" ]]; then
    continue
  fi
  
  # Check if the file contains 'categories:'
  if ! grep -q 'categories:' "$file"; then
    # Create a temp file
    temp_file=$(mktemp)
    
    # Add the categories field
    awk '
    BEGIN { in_frontmatter = 0; categories_added = 0; }
    
    /^---$/ {
      if (in_frontmatter == 0) {
        in_frontmatter = 1;
      } else {
        if (categories_added == 0) {
          print "categories: [\"project\"]";
          categories_added = 1;
        }
        in_frontmatter = 0;
      }
      print $0;
      next;
    }
    
    in_frontmatter == 1 && /^date:/ && categories_added == 0 {
      print $0;
      print "categories: [\"project\"]";
      categories_added = 1;
      next;
    }
    
    { print $0; }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    echo "Added categories to $file"
  fi
done

# Step 4: Update any display date formats in templates
for template in $(find "$HUGO_DIR/layouts" -name "*.html"); do
  # Create a temp file
  temp_file=$(mktemp)
  
  # Check for and fix date formats
  sed 's/{{ .Date.Format "January 2, 2006" }}/{{ if .Date }}{{ .Date.Format "January 2, 2006" }}{{ end }}/g' "$template" > "$temp_file"
  
  # Only replace the file if changes were made
  if diff -q "$template" "$temp_file" >/dev/null; then
    rm "$temp_file"
  else
    mv "$temp_file" "$template"
    echo "Fixed date display in $template"
  fi
done

echo "Final fixes applied successfully!"
echo "Try running 'hugo server -D' again." 