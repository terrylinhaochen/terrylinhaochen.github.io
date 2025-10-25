#!/bin/bash

# Super simple version script
# Usage: ./scripts/v.sh "1.1" "What you changed"
# Automatically detects the modified file

set -e

if [ $# -ne 2 ]; then
    echo "Usage: $0 <version> <changes>"
    echo "Example: $0 \"1.1\" \"Updated examples and fixed typos\""
    exit 1
fi

NEW_VERSION="$1"
CHANGES="$2"
DATE=$(date +%Y-%m-%d)

echo "🔍 Looking for modified files..."

# Find modified files in content/ directory
MODIFIED_FILES=$(git status --porcelain content/ | grep -E '^\s*M\s+' | awk '{print $2}' | grep -E '\.(md|markdown)$')

if [ -z "$MODIFIED_FILES" ]; then
    echo "❌ No modified markdown files found in content/ directory"
    echo "Make sure to edit and save your post first!"
    exit 1
fi

# Count how many files are modified
FILE_COUNT=$(echo "$MODIFIED_FILES" | wc -l)

if [ $FILE_COUNT -gt 1 ]; then
    echo "📝 Multiple modified files found:"
    echo "$MODIFIED_FILES"
    echo ""
    echo "Which file do you want to version?"
    select FILE_PATH in $MODIFIED_FILES; do
        if [ -n "$FILE_PATH" ]; then
            break
        fi
    done
else
    FILE_PATH=$(echo "$MODIFIED_FILES" | head -1)
    echo "📄 Found modified file: $FILE_PATH"
fi

echo ""
echo "🔄 Creating version $NEW_VERSION for $FILE_PATH"
echo "📝 Changes: $CHANGES"
echo ""
read -p "Continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 1
fi

# Call the original version script
./scripts/version.sh "$FILE_PATH" "$NEW_VERSION" "$CHANGES"

echo ""
echo "🎉 Done! Your post now has version history."
echo "🌐 View on site: hugo server -D"