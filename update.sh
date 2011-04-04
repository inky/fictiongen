#!/bin/bash
# Code (c) 2009 Liam Cooke
# See LICENSE.txt

set -e

DEST=boxofjunk:domains/fictiongen.inky.me/html/

if [ ! -e fictiongen.js ] || [ ! fictiongen.js -nt magic.js ]; then
    echo 'compiling javascript ...'
    python compile.py
fi

rsync -Phavz --del -FF ./ $DEST
