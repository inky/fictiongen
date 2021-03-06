#!/usr/bin/env python
# coding: utf-8
#
# Code (c) 2009 Liam Cooke
# See LICENSE.txt
#
# Content (c) 2009 David Malki !
# See http://wondermark.com/554/

vocab = dict(
    location_adj = u"""
        neo-noir
        alternate-history
        ancient
        post-apocalyptic
        dystopian
        VR-simulated
        metaphorical
        anachronistic
        leather-clad
        coal-powered
        dragon-filled
        shrill
    """,
    location_noun = u"""
        America
        Japan
        Soviet Russia
        Victorian Britain
        medieval Europe
        Aztec empire
        Atlantis
        terraformed Mars
        Antarctica
        one-way spaceflight
        Outer Rim world
        set from <i>Road Warrior</i>
    """,
    protagonist = u"""
        flying message courier
        student of metaphysics
        milquetoast office drone
        schlub with mild <abbr>OCD</abbr>
        farm boy with dreams
        techno-obsessed geek
        brooding loner
        wisecracking mercenary
        idealistic revolutionary
        journeyman inventor
        collector of oddities
        author self-insert
    """,
    discovery = u"""
        magic diadem
        arcane prophecy
        dusty tome
        crazy old man
        alien artifact
        enchanted sword
        otherworldly portal
        dream-inducing drug
        encrypted data feed
        time-traveling soldier
        exiled angel
        talking fish
    """,
    adversary = u"""
        a megalomaniacal dictator
        a government conspiracy
        a profit-obsessed corporation
        a sneering wizard
        supernatural monsters
        computer viruses made real
        murderous robots
        an army led by a sadist
        forces that encourage conformity
        a charismatic politician on the rise
        humanity’s selfish nature
        his own insecurity <i>vis-à-vis</i> girls
    """,
    assistant = u"""
        sarcastic female techno-geek
        tomboyish female mechanic
        shape-shifting female assassin
        leather-clad female in shades
        girl who's always loved him
        bookish female scholar with mousy brown hair
        cherubic girl with pigtails and spunk
        female who inexplicably becomes attracted to the damaged protagonist for unstated reasons
    """,
    inventory = u"""
        wacky pet
        welding gear
        closet full of assault rifles
        reference book
        cleavage
        facility with magic
        condescending tone
        discomfort in formal wear
    """,
    conflict = u"""
        a fistfight atop a tower
        a daring rescue preceding a giant explosion
        a heroic sacrifice that no one will ever remember
        a philosophical argument punctuated by violence
        a false victory with the promise of future danger
        the invocation of a spell at the last possible moment
        eternal love professed without irony
        the land restored to health
        authorial preaching through the mouths of the characters
        convoluted nonsense that squanders the readers’ goodwill
        wish-fulfillment solutions to real-world problems
        a cliffhanger for the sake of prompting a series
    """,
    title_adj = u"""
        Chrono
        Neuro
        Aero
        Cosmo
        Reve
        Necro
        Cyber
        Astro
        Psycho
        Steam
        Meta
        Black
    """,
    title_noun = u"""
        punks
        mechs
        noiacs
        opolis
        nauts
        phages
        droids
        bots
        blades
        trons
        mancers
        Wars
    """
)

for part, words in vocab.items():
    vocab[part] = tuple(word.strip() for word in words.strip().split('\n'))

if __name__ == '__main__':
    import json
    print json.dumps(vocab)
