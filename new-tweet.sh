#!/bin/bash

# New Tweet Script - Quickly add a new tweet to your timeline
# Usage: ./new-tweet.sh [mood] [optional-location]
# Example: ./new-tweet.sh dev "Hong Kong"

# Configuration
CONTENT_DIR="src/content/tweets"
CURRENT_YEAR=$(date +%Y)
CURRENT_MONTH=$(date +%m)
TIMESTAMP=$(date +%Y-%m-%d-%H%M)
ISO_TIMESTAMP=$(date -u +%Y-%m-%dT%H:%M:%S.000Z)

# Create directory structure
TWEET_DIR="$CONTENT_DIR/$CURRENT_YEAR/$CURRENT_MONTH"
mkdir -p "$TWEET_DIR"

# Generate filename
FILENAME="$TWEET_DIR/$TIMESTAMP.md"

# Check if file already exists
if [ -f "$FILENAME" ]; then
  echo "❌ Tweet file already exists: $FILENAME"
  echo "💡 Try again in a minute or manually specify a different filename"
  exit 1
fi

# Create frontmatter
cat > "$FILENAME" << EOF
---
pubDate: "$ISO_TIMESTAMP"
---
EOF

echo "✅ Created new tweet: $FILENAME"
code $FILENAME