/*
 * Code (c) 2009 Liam Cooke
 * See LICENSE.txt
 */
(function ($w, $d) {
    if (/mobile.*safari/.test(navigator.userAgent.toLowerCase())) {
        $d.title='Genre-Fiction';
    }
    $d.ready(function() {
        var vocab = new Object(), count = new Object(), blocked = true;
        var $button = $('#button'), $story = $('#story p'), $title = $('#story h2');
        function unblock()
        {
            blocked = false;
            $button.fadeTo('fast', 1.0);
        }
        function block()
        {
            blocked = true;
            $button.fadeTo('fast', 0.4);
        }
        function indefinite(word) {
            a = ('aeiou'.indexOf(word.charAt(0)) >= 0) ? 'an' : 'a';
            return a + ' ' + word;
        }
        function word(key) {
            return vocab[key][Math.floor(count[key] * Math.random())];
        }
        function story() {
            return new Array(
                'In', indefinite(word('location_adj')), word('location_noun') + ',',
                'a young', word('protagonist'),
                'stumbles across', indefinite(word('discovery')),
                'which spurs him into conflict with', word('adversary') + ',',
                'with the help of', indefinite(word('assistant')),
                'and her', word('inventory') + ',',
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
            if (blocked) return false;
            block();
            $story.html(story());
            $title.html('Your title is: \u201C<i>The ' + title() + '</i>\u201D');
            setTimeout(function() { unblock(); }, 500);
        }
        $button.click(generate);
        $.getJSON('vocab.json', function(data) {
            vocab = data.vocab;
            count = data.count;
            blocked = false;
            generate();
            $('body').fadeTo(500, 1.0);
        });
    });
})($(window), $(document));
