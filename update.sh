DEST=boxofjunk:domains/fictiongen.boxofjunk.ws/html/

rsync -Phavz --del -FF ./ $DEST
