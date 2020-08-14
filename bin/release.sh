#!/bin/bash

repo="$1"


version=$(yarn version:show)
yarn version apply --all

git remote add release "https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git"
git tag "${TAG_PREFIX:-v}${version}"
git push --tags

