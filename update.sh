#!/bin/bash
# Code (c) 2009 Liam Cooke
# See LICENSE.txt

set -e

DEST=boxofjunk:domains/fictiongen.boxofjunk.ws/html/

if [ ! vocab.json -nt vocab.py ]; then
    echo 'updating vocab.json ...'
    python vocab.py > vocab.json
fi

rsync -Phavz --del -FF ./ $DEST
