#!/bin/bash

# Usage: ./scripts/version.sh <file_path> <version> <changes>
# Example: ./scripts/version.sh content/posts/my-post.md "1.1" "Updated examples and fixed typos"

set -e

if [ $# -ne 3 ]; then
    echo "Usage: $0 <file_path> <version> <changes>"
    echo "Example: $0 content/posts/my-post.md \"1.1\" \"Updated examples\""
    exit 1
fi

FILE_PATH="$1"
NEW_VERSION="$2"
CHANGES="$3"
DATE=$(date +%Y-%m-%d)

# Check if file exists
if [ ! -f "$FILE_PATH" ]; then
    echo "Error: File $FILE_PATH does not exist"
    exit 1
fi

echo "🔄 Creating version $NEW_VERSION for $FILE_PATH"

# 1. Commit current state to git
echo "📝 Committing current state to git..."
git add "$FILE_PATH"
git commit -m "Version $NEW_VERSION: $CHANGES

File: $FILE_PATH
Date: $DATE" || echo "No changes to commit"

# 2. Create git tag for this version
echo "🏷️  Creating git tag v$NEW_VERSION..."
git tag -a "$(basename "$FILE_PATH" .md)-v$NEW_VERSION" -m "Version $NEW_VERSION: $CHANGES"

# 3. Update frontmatter with new version info
echo "✏️  Updating frontmatter..."

# Create temporary file for frontmatter update
TEMP_FILE=$(mktemp)

# Check if file has existing changelog
if grep -q "^version:" "$FILE_PATH"; then
    # Update existing version
    sed "s/^version:.*/version: \"$NEW_VERSION\"/" "$FILE_PATH" > "$TEMP_FILE"
    mv "$TEMP_FILE" "$FILE_PATH"
else
    # Add version field after existing frontmatter
    awk -v version="$NEW_VERSION" '
    BEGIN { in_frontmatter = 0; version_added = 0 }
    /^---$/ { 
        if (in_frontmatter == 0) {
            in_frontmatter = 1
            print $0
        } else if (in_frontmatter == 1 && version_added == 0) {
            print "version: \"" version "\""
            print $0
            version_added = 1
        } else {
            print $0
        }
        next
    }
    { print $0 }
    ' "$FILE_PATH" > "$TEMP_FILE"
    mv "$TEMP_FILE" "$FILE_PATH"
fi

# Update or create condensed version history section
REPO_URL="https://github.com/terrylinhaochen/terrylinhaochen.github.io"
FORMATTED_DATE=$(date +"%b %d, %Y")
VERSION_ENTRY="**v$NEW_VERSION** • $FORMATTED_DATE • [View changes]($REPO_URL/commits/main/$FILE_PATH) • $CHANGES"

if grep -q "^## 📋 Version History" "$FILE_PATH"; then
    # Insert new version entry after the Version History header
    awk -v entry="$VERSION_ENTRY" '
    /^## 📋 Version History/ {
        print $0
        print ""
        print entry
        print ""
        # Skip the next line if it exists and continue
        if ((getline next_line) > 0) {
            if (next_line ~ /^\*\*v/) {
                # Found existing version entry, print it and continue
                print next_line
                while ((getline following_line) > 0) {
                    print following_line
                }
            } else {
                # Not a version entry, print as is
                print next_line
                while ((getline following_line) > 0) {
                    print following_line
                }
            }
        }
        next
    }
    { print $0 }
    ' "$FILE_PATH" > "$TEMP_FILE"
    mv "$TEMP_FILE" "$FILE_PATH"
else
    # Add version history section at the end
    echo "" >> "$FILE_PATH"
    echo "---" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "## 📋 Version History" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "$VERSION_ENTRY" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "💡 *Click \"View changes\" to see exactly what changed between versions*" >> "$FILE_PATH"
fi

# 4. Final commit with updated frontmatter and version history
echo "💾 Committing frontmatter and version history updates..."
git add "$FILE_PATH"
git commit -m "Update frontmatter and version history for v$NEW_VERSION

Added condensed version entry for v$NEW_VERSION"

echo "✅ Version $NEW_VERSION created successfully!"
echo "🔗 View changes: https://github.com/terrylinhaochen/terrylinhaochen.github.io/commits/main/$FILE_PATH"
echo "🏷️  Git tag: $(basename "$FILE_PATH" .md)-v$NEW_VERSION"