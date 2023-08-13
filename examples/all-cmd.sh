#!/bin/sh

set -ue

LIST=$(find . -maxdepth 1 -type d -not -name ".*")

for DIR in $LIST; do
 pushd $DIR
   ${@}
 popd
done
