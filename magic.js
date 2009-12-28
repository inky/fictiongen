/*
 * Code (c) 2009 Liam Cooke
 * See LICENSE.txt
 */
$(document).ready(function() {
    var iPhone = /AppleWebKit.*Mobile/.test(navigator.userAgent);
    var iPhoneApp = iPhone && !(/Mobile.*Safari/.test(navigator.userAgent));
    if (iPhone) document.title = 'Genre-Fiction';

    var count = new Object, vocab = {{{VOCAB}}};
    for (var prop in vocab) {
        count[prop] = vocab[prop].length;
    }

    var $content = $('#story'), $button = $('#button'), $footer = $('#footer');
    $content.hide().html('<h2></h2><p></p>');

    var $story = $content.find('p'), $title = $content.find('h2');
    var blocked = true;

    function unblock()
    {
        blocked = false;
        $button.stop().fadeTo('fast', 1.0);
    }
    function block()
    {
        blocked = true;
        $button.stop().fadeTo('fast', 0.4);
    }
    function word(key, comma) {
        c = (comma) ? ',' : '';
        return vocab[key][Math.floor(Math.random() * count[key])] + c;
    }
    function indefinite(key, comma) {
        w = word(key, comma);
        a = (/^[aeiouAEIOU]/.test(w)) ? 'an' : 'a';
        return a + ' ' + w;
    }
    function story() {
        return new Array(
            'In', indefinite('location_adj'), word('location_noun', true),
            'a young', word('protagonist'),
            'stumbles across', indefinite('discovery'),
            'which spurs him into conflict with', word('adversary', true),
            'with the help of', indefinite('assistant'),
            'and her', word('inventory', true),
            'culminating in', word('conflict')
        ).join(' ') + '.';
    }
    function title() {
        var adj = word('title_adj'), noun = word('title_noun'), sep = '';
        if (noun.charAt(0) == noun.charAt(0).toUpperCase()) {
            sep = ' ';
        } else if (noun == 'opolis' && /[ao]$/.test(adj)) {
            noun = noun.substring(1);
        }
        return adj + sep + noun;
    }
    function generate() {
        $story.html(story());
        $title.html('Your title is: \u201C<i>The ' + title() + '</i>\u201D');
    }

    $button.click(function() {
        if (blocked) return false;
        block();
        $content.stop().fadeTo(500, 0.0, function() {
            generate();
            $content.fadeTo(500, 1.0, unblock);
        });
    });

    if (iPhone && !iPhoneApp) {
        $footer.prepend('<p>Add this app to your home screen; no internet connection needed!</p>');
    } else if (!iPhone && !!window.applicationCache) {
        $footer.prepend('<p>Your browser can run this generator while offline.</p>');
    }

    blocked = false;
    generate();
    setTimeout(function() {
        $content.slideDown(750);
        $('body').fadeTo(750, 1.0, unblock);
    }, 100);
});
