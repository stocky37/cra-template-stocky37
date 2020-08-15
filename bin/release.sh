#!/bin/bash

set -e

format() {
  local templatestr="$1"; shift
  echo "$templatestr" | envsubst
}

DEFAULT_TAG_TEMPLATE='v${NEW_VERSION}'
DEFAULT_COMMIT_TEMPLATE='release ${TAG}'
export GIT_AUTHOR_NAME="${GIT_AUTHOR_NAME:-Travis CI}"
export GIT_AUTHOR_EMAIL="${GIT_AUTHOR_EMAIL:-travis@travis-ci.com}"
export GIT_COMMITTER_NAME="${GIT_COMMITTER_NAME:-$GIT_AUTHOR_NAME}"
export GIT_COMMITTER_EMAIL="${GIT_COMMITTER_EMAIL:-$GIT_AUTHOR_EMAIL}"

echo "Discovering new version..."
yarn version apply --all
export NEW_VERSION=$(yarn version:show)
export TAG="$(format "${RELEASE_TAG_TEMPLATE:-$DEFAULT_TAG_TEMPLATE}")"

echo "Releasing $TAG..."
git remote add release "https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git"
git commit -am "$(format "${RELEASE_COMMIT_TEMPLATE:-$DEFAULT_COMMIT_TEMPLATE}")"
git tag "$TAG"
git push release "HEAD:$TRAVIS_BRANCH"
git push release --tags

echo "Publishing $TAG..."
yarn publish
