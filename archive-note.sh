#!/bin/bash
# Script to easily move content to the archived section

# Check if a filename was provided
if [ -z "$1" ]; then
  echo "Usage: ./archive-note.sh path/to/note.md"
  echo "Example: ./archive-note.sh content/posts/old-post.md"
  exit 1
fi

# Get the full path of the file
FILE_PATH="$1"

# Check if the file exists
if [ ! -f "$FILE_PATH" ]; then
  echo "Error: File '$FILE_PATH' not found."
  exit 1
fi

# Get just the filename without the path
FILENAME=$(basename "$FILE_PATH")

# Create the destination path
DEST_PATH="content/archived/$FILENAME"

# Move the file
mv "$FILE_PATH" "$DEST_PATH"

# Check if the move was successful
if [ $? -eq 0 ]; then
  echo "Successfully archived: $FILENAME"
  echo "File moved to: $DEST_PATH"
  
  # Add optional git commit if in a git repository
  if git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    read -p "Would you like to commit this change? (y/n): " COMMIT
    if [[ $COMMIT =~ ^[Yy]$ ]]; then
      git add "$FILE_PATH" "$DEST_PATH"
      git commit -m "Archive: Move $FILENAME to archived section"
      echo "Changes committed to git repository."
    fi
  fi
else
  echo "Error archiving file."
  exit 1
fi

echo ""
echo "To view your archived content, visit: http://localhost:XXXX/archived/ (when running the local server)"
echo "Or visit: https://terrylinhaochen.github.io/archived/ (on the live site)" 