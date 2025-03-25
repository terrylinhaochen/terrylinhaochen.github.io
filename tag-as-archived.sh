#!/bin/bash
# Script to add the "archived" tag to a file without moving it

# Check if a filename was provided
if [ -z "$1" ]; then
  echo "Usage: ./tag-as-archived.sh path/to/note.md"
  echo "Example: ./tag-as-archived.sh content/posts/old-post.md"
  exit 1
fi

# Get the full path of the file
FILE_PATH="$1"

# Check if the file exists
if [ ! -f "$FILE_PATH" ]; then
  echo "Error: File '$FILE_PATH' not found."
  exit 1
fi

# Create a temporary file
TEMP_FILE=$(mktemp)

# Process the file line by line to add the archived tag
FOUND_TAGS=0
IN_FRONTMATTER=0
ADDED_TAG=0

while IFS= read -r line; do
  # Check if we're in the frontmatter
  if [[ "$line" == "---" ]]; then
    if [[ $IN_FRONTMATTER -eq 0 ]]; then
      IN_FRONTMATTER=1
    else
      IN_FRONTMATTER=0
      # If we didn't find any tags and we're leaving the frontmatter, add tags line
      if [[ $FOUND_TAGS -eq 0 && $ADDED_TAG -eq 0 ]]; then
        echo 'tags: ["archived"]' >> "$TEMP_FILE"
        ADDED_TAG=1
      fi
    fi
    echo "$line" >> "$TEMP_FILE"
    continue
  fi

  # If we find a tags line in the frontmatter
  if [[ $IN_FRONTMATTER -eq 1 && "$line" =~ ^tags:.*$ ]]; then
    FOUND_TAGS=1
    # Check if the archived tag is already present
    if [[ "$line" =~ \"archived\" || "$line" =~ \'archived\' ]]; then
      echo "$line" >> "$TEMP_FILE"
      echo "The file already has the 'archived' tag."
    else
      # Add the archived tag to the existing tags list
      if [[ "$line" =~ \[\] ]]; then
        # Empty array, replace with ["archived"]
        echo "${line/\[\]/\[\"archived\"\]}" >> "$TEMP_FILE"
      elif [[ "$line" =~ \[.*\] ]]; then
        # Array notation, insert at beginning
        echo "${line/\[/\[\"archived\", }" >> "$TEMP_FILE"
      else
        # Non-array notation, convert to array with archived first
        VALUE=${line#*:}
        echo "tags: [\"archived\", $VALUE]" >> "$TEMP_FILE"
      fi
      ADDED_TAG=1
    fi
  else
    echo "$line" >> "$TEMP_FILE"
  fi
done < "$FILE_PATH"

# Only replace the file if we actually made changes
if [[ $ADDED_TAG -eq 1 ]]; then
  cp "$TEMP_FILE" "$FILE_PATH"
  echo "Successfully added 'archived' tag to: $FILE_PATH"
  
  # Add optional git commit if in a git repository
  if git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    read -p "Would you like to commit this change? (y/n): " COMMIT
    if [[ $COMMIT =~ ^[Yy]$ ]]; then
      git add "$FILE_PATH"
      git commit -m "Archive: Add archived tag to $(basename "$FILE_PATH")"
      echo "Changes committed to git repository."
    fi
  fi
else
  echo "No changes were necessary. The file is already properly tagged or has issues."
fi

# Clean up the temporary file
rm "$TEMP_FILE"

echo ""
echo "To view your archived content, visit: http://localhost:XXXX/archived/ (when running the local server)"
echo "Or visit: https://terrylinhaochen.github.io/archived/ (on the live site)" 