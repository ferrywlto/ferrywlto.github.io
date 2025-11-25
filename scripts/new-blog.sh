#!/bin/bash

# New Blog Post Script - Quickly create a new blog post
# Usage: ./new-blog.sh
# Creates a new blog post with current date and opens it in VS Code

# Configuration
CONTENT_DIR="src/content/blogs"
CURRENT_YEAR=$(date +%Y)
CURRENT_MONTH=$(date +%m)
CURRENT_DATE=$(date +%Y-%m-%d)

# Create directory structure (using dev folder as default category)
POST_DIR="$CONTENT_DIR/$CURRENT_YEAR/$CURRENT_MONTH"
mkdir -p "$POST_DIR"

# Generate filename
FILENAME="$POST_DIR/$CURRENT_DATE.md"

# Check if file already exists
if [ -f "$FILENAME" ]; then
  echo "❌ Blog post already exists: $FILENAME"
  echo "💡 Edit the existing file or manually specify a different filename"
  exit 1
fi

# Create frontmatter
cat > "$FILENAME" << EOF
---
title: ''
description: ''
pubDate: $CURRENT_DATE
tags: []
---

EOF

echo "✅ Created new blog post: $FILENAME"
code "$FILENAME"
