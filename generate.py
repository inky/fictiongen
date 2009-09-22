#!/usr/bin/env python
# coding: utf-8
#
# Code (c) 2009 Liam Cooke
# See LICENSE.txt

from random import choice

from vocab import vocab


def indefinite(word):
    a = word[0] in 'aeiou' and 'an' or 'a'
    return ' '.join((a, word))

def word(part):
    return choice(vocab[part])

def story():
    string = u"In %s %s, a young %s stumbles across %s which spurs him "\
             u"into conflict with %s, with the help of %s and her %s, "\
             u"culminating in %s."

    return string % (indefinite(word('location_adj')),
                     word('location_noun'),
                     word('protagonist'),
                     indefinite(word('discovery')),
                     word('adversary'),
                     indefinite(word('assistant')),
                     word('inventory'),
                     word('conflict'))

def title():
    adj = word('title_adj')
    noun = word('title_noun')
    sep = ''
    if noun[0] == noun[0].upper():
        sep = ' '
    elif noun == 'opolis' and adj[-1] in 'ao':
        noun = noun[1:]

    return u'The %s%s%s' % (adj, sep, noun)

def test():
    import textwrap
    print textwrap.fill(story(), width=78)
    print ''
    print 'Your title is: %s.' % title()

if __name__ == '__main__':
    test()
