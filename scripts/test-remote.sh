#!/usr/bin/env bash

set -exuo pipefail

[[ -n "$BROWSER" ]] || {
  echo "missing BROWSER variable"
  exit 1
}

cd packages/pwa

yarn run wct --plugin sauce
