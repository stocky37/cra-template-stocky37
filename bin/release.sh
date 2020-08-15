#!/bin/bash

DEFAULT_TAG_TEMPLATE='v${NEW_VERSION}'
DEFAULT_COMMIT_TEMPLATE='release ${TAG}'

format() {
  local templatestr="$1"; shift
  echo "$templatestr" | envsubst
}

echo "Discovering new version..."
export NEW_VERSION=$(yarn version:show)
export TAG="$(format "${RELEASE_TAG_TEMPLATE:-$DEFAULT_TAG_TEMPLATE}")"

echo "Releasing $TAG..."
yarn version apply --all
git remote add release "https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git"
git commit -am "$(format "${RELEASE_COMMIT_TEMPLATE:-$DEFAULT_COMMIT_TEMPLATE}")"
git tag "$TAG"
git push release
git push release --tags

echo "Publishing $TAG..."
yarn publish
