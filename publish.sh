#!/bin/bash

# go to the gh-pages branch
git checkout -b gh-pages

# bring gh-pages up to date with main
git rebase main

# commit the changes
git push origin-github gh-pages

# back to the main branch
git checkout main
