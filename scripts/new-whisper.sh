#!/bin/bash

# New Whisper Script - Quickly add a new whisper to your timeline
# Usage: ./new-whisper.sh [mood] [optional-location]
# Example: ./new-whisper.sh dev "Hong Kong"

# Configuration
CONTENT_DIR="src/content/whispers"
CURRENT_YEAR=$(date +%Y)
CURRENT_MONTH=$(date +%m)
TIMESTAMP=$(date +%Y-%m-%d-%H%M)
ISO_TIMESTAMP=$(date -u +%Y-%m-%dT%H:%M:%S.000Z)

# Create directory structure
WHISPER_DIR="$CONTENT_DIR/$CURRENT_YEAR/$CURRENT_MONTH"
mkdir -p "$WHISPER_DIR"

# Generate filename
FILENAME="$WHISPER_DIR/$TIMESTAMP.md"

# Check if file already exists
if [ -f "$FILENAME" ]; then
  echo "❌ Whisper file already exists: $FILENAME"
  echo "💡 Try again in a minute or manually specify a different filename"
  exit 1
fi

# Create frontmatter
cat > "$FILENAME" << EOF
---
pubDate: '$ISO_TIMESTAMP'
---
EOF

echo "✅ Created new whisper: $FILENAME"
code $FILENAME
