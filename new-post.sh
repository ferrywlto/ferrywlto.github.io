#!/bin/bash

# Generate the current date in yyyyMMdd format
current_date=$(date +"%Y-%m-%d")
path="src/content/blog/dev/latest/"
filename="${current_date}.md"
fullpath="${path}${filename}"

# Create a new file with the date as the filename
touch $fullpath
echo "---" >> $fullpath
echo "title: ''" >> $fullpath
echo "description: ''" >> $fullpath
echo "pubDate: ${current_date}" >> $fullpath
echo "tags: []" >> $fullpath
echo "---" >> $fullpath
echo "Created file: ${fullpath}"

code ${fullpath}