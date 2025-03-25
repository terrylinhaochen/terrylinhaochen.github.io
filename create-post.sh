#!/bin/bash

# Script to create a new post with associated image directory

# Check if title argument is provided
if [ $# -lt 1 ]; then
    echo "Usage: $0 \"Your Post Title\" [category]"
    exit 1
fi

# Get the title and create a slug
TITLE="$1"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd 'a-z0-9-')
DATE=$(date +%Y-%m-%d)
YEAR=$(date +%Y)
MONTH=$(date +%m)

# Get category (default to "posts")
CATEGORY=${2:-"posts"}

# Create post file
POST_PATH="content/${CATEGORY}/${DATE}-${SLUG}.md"

# Create image directory in static folder
IMAGE_DIR="static/images/${CATEGORY}/${SLUG}"
mkdir -p "$IMAGE_DIR"

# Create the frontmatter template for the post
cat > "$POST_PATH" << EOF
---
title: "${TITLE}"
date: ${DATE}
description: ""
tags: []
categories: []
cover:
    image: "/images/${CATEGORY}/${SLUG}/cover.jpg"
    alt: "${TITLE}"
    caption: ""
    relative: false
draft: true
---

## Introduction

Write your content here.

## Section 1

To include an image:

![Image Description](/images/${CATEGORY}/${SLUG}/image1.jpg)

## Section 2

More content here.

EOF

# Make the script executable
chmod +x "$0"

echo "Created post: $POST_PATH"
echo "Created image directory: $IMAGE_DIR"
echo "Don't forget to add your cover.jpg file to the image directory!"
echo ""
echo "To serve your site with drafts: hugo server -D" 