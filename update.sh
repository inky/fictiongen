#!/bin/bash
# Code (c) 2009 Liam Cooke
# See LICENSE.txt

set -e

DEST=boxofjunk:domains/fictiongen.boxofjunk.ws/html/
#DEST=boxofjunk:domains/omgbeta.boxofjunk.ws/html/

if [ ! -e fictiongen.js ] || [ ! fictiongen.js -nt magic.js ]; then
    echo 'compiling javascript ...'
    python compile.py
fi

rsync -Phavz --del -FF ./ $DEST
