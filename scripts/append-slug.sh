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
if [[ $base =~ ^([0-9]{4}-[0-9]{2}-[0-9]{2})(\.md)$ ]]; then
  title=$(grep -m1 '^title:' "$FILE" | sed -E "s/^title:\s*[\"']?([^\"']+)[\"']?\s*$/\1/") || true
  if [[ -z $title ]]; then
    echo "Title not found; skipping" >&2
    exit 2
  fi
  slug=$(slugify "$title")
  if [[ -z $slug ]]; then
    echo "Empty slug; skipping" >&2
    exit 3
  fi
  new="$dir/${BASH_REMATCH[1]}-$slug.md"
  if [[ "$FILE" == "$new" ]]; then
    echo "Already slugged: $FILE" >&2
    exit 0
  fi
  mv "$FILE" "$new"
  echo "$FILE -> $new"
else
  echo "Filename does not match date pattern (YYYY-MM-DD.md): $base" >&2
  exit 4
fi