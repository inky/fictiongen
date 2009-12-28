#!/usr/bin/env python

import json
from vocab import vocab

SCRIPTS = ('jquery-1.3.2.min.js', 'magic.js')

def vocab_json():
    return json.dumps(vocab)

def compile():
    script = unicode('\n'.join(open(fn).read() for fn in SCRIPTS))
    return script.replace('{{{VOCAB}}}', vocab_json())

if __name__ == '__main__':
    with open('fictiongen.js', 'w') as fp:
        fp.write(compile().encode('utf-8'))
