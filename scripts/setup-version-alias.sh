#!/bin/bash

# Setup script to create a global 'version' command
# Run this once: ./scripts/setup-version-alias.sh

BLOG_DIR="/Users/terry/Desktop/terrylinhaochen.github.io"

echo "🔧 Setting up 'version' command..."

# Add alias to .zshrc (or .bashrc)
if [ -f ~/.zshrc ]; then
    SHELL_RC=~/.zshrc
elif [ -f ~/.bashrc ]; then
    SHELL_RC=~/.bashrc
else
    echo "❌ Could not find .zshrc or .bashrc"
    exit 1
fi

# Check if alias already exists
if grep -q "alias version=" "$SHELL_RC"; then
    echo "✅ Version alias already exists in $SHELL_RC"
else
    echo "" >> "$SHELL_RC"
    echo "# Blog version tracking alias" >> "$SHELL_RC"
    echo "alias version='cd $BLOG_DIR && ./scripts/v.sh'" >> "$SHELL_RC"
    echo "✅ Added version alias to $SHELL_RC"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Now you can use:"
echo "  version \"1.1\" \"Updated examples\""
echo ""
echo "From anywhere in your terminal!"
echo ""
echo "Run: source $SHELL_RC"
echo "Or restart your terminal to activate."