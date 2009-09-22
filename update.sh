#!/bin/bash
# Code (c) 2009 Liam Cooke
# See LICENSE.txt

DEST=boxofjunk:domains/fictiongen.boxofjunk.ws/html/

rsync -Phavz --del -FF ./ $DEST
