# Fail out on error
set -exuo pipefail

export BROWSER="$1"

cd packages/pwa;
yarn run wct --plugin sauce
