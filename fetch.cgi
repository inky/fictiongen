#!/usr/bin/env python
# coding: utf-8

import cgi

import generate
import json


MAX_STORIES = 64

DEFAULT_HEADERS = [
    'Content-Type: application/json; charset=utf-8',
    'Cache-Control: no-cache',
    'Expires: Tue, 22 Sep 2009 14:00:00 GMT',
]

def safe_int(value):
    try:
        result = value and int(value) or 0
    except ValueError:
        result = 0
    return result

def story():
    text = '&nbsp;'.join(generate.story().rsplit(' ', 1))
    return {
        'story': text,
        'title': generate.title(),
    }

def get(stories):
    stories = max(1, min(safe_int(stories), MAX_STORIES))
    data = [story() for _ in xrange(stories)]
    headers = ['X-Stories: %d' % stories]
    return headers, json.write(data)

def do_request():
    args = cgi.FieldStorage()
    stories = 2
    if args.has_key('stories'):
        stories = args['stories'].value

    result = get(stories)
    headers = DEFAULT_HEADERS + result[0]
    return '%s\n\n%s' % ('\n'.join(headers), result[1].encode('utf-8'))

if __name__ == '__main__':
    print do_request()
