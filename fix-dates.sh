#!/bin/bash

# Script to fix date formats in Hugo content files
# Converts dates like 2024-8-18 to 2024-08-18

HUGO_DIR="/Users/terry/Desktop/hugo-site"

echo "Fixing date formats in content files..."

# Loop through all content files and fix dates
for file in $(find "$HUGO_DIR/content" -name "*.md"); do
  echo "Processing $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Process the file line by line
  in_frontmatter=false
  while IFS= read -r line || [ -n "$line" ]; do
    # Check if we're in the frontmatter
    if [[ $line == "---" ]]; then
      if $in_frontmatter; then
        in_frontmatter=false
      else
        in_frontmatter=true
      fi
      echo "$line" >> "$temp_file"
      continue
    fi
    
    # If we're in the frontmatter and the line starts with "date:", fix the date format
    if $in_frontmatter && [[ $line =~ ^date:\ *([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}) ]]; then
      year="${BASH_REMATCH[1]}"
      month=$(printf "%02d" "${BASH_REMATCH[2]}")
      day=$(printf "%02d" "${BASH_REMATCH[3]}")
      echo "date: ${year}-${month}-${day}" >> "$temp_file"
      echo "  Fixed date: ${BASH_REMATCH[1]}-${BASH_REMATCH[2]}-${BASH_REMATCH[3]} -> ${year}-${month}-${day}"
    else
      echo "$line" >> "$temp_file"
    fi
  done < "$file"
  
  # Replace the original file with the fixed file
  mv "$temp_file" "$file"
done

echo "Date formats fixed successfully!"
echo "Try running 'hugo server -D' again." 