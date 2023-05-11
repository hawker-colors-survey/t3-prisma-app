#!/bin/bash

# Loop over all directories in the current directory
for dir in */
do
  # Check if the directory name matches the pattern "This Case"
	printf "$dir"

  # Rename the directory to "this-case"
	newdir=$(echo "$dir" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g')
  mv "$dir" "$newdir"
done
