#!/bin/bash

# New Diary Post Script - Quickly create a new diary post
# Usage: ./new-diary.sh
# Creates a new diary post with current date and opens it in VS Code

# Configuration
CONTENT_DIR="src/content/diaries"
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
  echo "❌ Diary post already exists: $FILENAME"
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

echo "✅ Created new diary post: $FILENAME"
code "$FILENAME"
