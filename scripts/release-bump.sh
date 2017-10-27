#!/usr/bin/env bash

set -exuo pipefail

[[ -n "$TRAVIS_TAG" ]] || {
  echo "missing TRAVIS_TAG variable"
  exit 1
}

do_release() {
  echo

  yarn run lerna publish --skip-npm --conventional-commits --yes
}

do_reset() {
  unset -f do_release do_reset
}

trap do_reset INT TERM EXIT
do_release
trap - INT TERM EXIT
