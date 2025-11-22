#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <path-to-markdown-file>" >&2
  exit 1
fi
FILE="$1"
if [[ ! -f "$FILE" ]]; then
  echo "File not found: $FILE" >&2
  exit 1
fi

slugify() {
  local s="$1"
  s=$(printf '%s' "$s" | tr '—–' '-' )
  s=$(printf '%s' "$s" | sed "s/[\"'<>]//g")
  s=$(printf '%s' "$s" | perl -CS -pe 's/[^A-Za-z0-9\x{4e00}-\x{9fff}]+/-/g')
  s=$(printf '%s' "$s" | sed -E 's/-+/-/g; s/^-//; s/-$//' )
  printf '%s' "$s"
}

base=$(basename "$FILE")
dir=$(dirname "$FILE")
# extract title and pubDate from frontmatter
title=$(grep -m1 '^title:' "$FILE" | sed -E "s/^title:[[:space:]]*[\"']?([^\"']+)[\"']?[[:space:]]*$/\1/") || true
pubDate=$(grep -m1 '^pubDate:' "$FILE" | grep -Eo '[0-9]{4}-[0-9]{2}-[0-9]{2}' | head -1) || true
if [[ -z $title || -z $pubDate ]]; then
  echo 'Missing title or pubDate; skipping' >&2
  exit 2
fi
slug=$(slugify "$title" | tr 'A-Z' 'a-z')
slug=${slug#title-}
if [[ -z $slug ]]; then
  echo 'Empty slug; skipping' >&2
  exit 3
fi
new="$dir/${pubDate}-$slug.md"
if [[ "$FILE" == "$new" ]]; then
  echo 'Already slugged: '"$FILE" >&2
  exit 0
fi
mv "$FILE" "$new"
echo "$FILE -> $new"