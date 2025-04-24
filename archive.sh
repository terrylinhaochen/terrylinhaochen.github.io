#!/bin/bash
# Main archiving script with multiple options

echo "======================================"
echo "        Note Archiving System         "
echo "======================================"
echo ""
echo "Choose how you want to archive content:"
echo ""
echo "1) Move a file to the archived section"
echo "2) Tag a file as archived (without moving it)"
echo "3) View archived content guide"
echo "4) Exit"
echo ""
read -p "Enter your choice (1-4): " CHOICE

case $CHOICE in
  1)
    read -p "Enter the path to the file to move (e.g., content/posts/my-post.md): " FILE_PATH
    if [ -z "$FILE_PATH" ]; then
      echo "No file path provided. Exiting."
      exit 1
    fi
    ./archive-note.sh "$FILE_PATH"
    ;;
  2)
    read -p "Enter the path to the file to tag (e.g., content/posts/my-post.md): " FILE_PATH
    if [ -z "$FILE_PATH" ]; then
      echo "No file path provided. Exiting."
      exit 1
    fi
    ./tag-as-archived.sh "$FILE_PATH"
    ;;
  3)
    echo ""
    echo "=== Archiving Content Guide ==="
    echo ""
    echo "Method 1: Move a file to the archived section"
    echo "  ./archive-note.sh content/posts/post-to-archive.md"
    echo ""
    echo "Method 2: Tag a file as archived (without moving it)"
    echo "  ./tag-as-archived.sh content/posts/post-to-archive.md"
    echo ""
    echo "Method 3: Use this menu script"
    echo "  ./archive.sh"
    echo ""
    echo "For more details, visit: http://localhost:XXXX/archived/how-to-archive-content/"
    echo "or: https://terrylinhaochen.github.io/archived/how-to-archive-content/"
    ;;
  4)
    echo "Exiting."
    exit 0
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac 