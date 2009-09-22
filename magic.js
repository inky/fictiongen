function log(text) {
    //console.log(text);
}

log('magic.js');

$(document).ready(function() {
    var stories = new Array();
    var blocked = true;
    var amount = 1;

    var el_button = $('#button');
    var el_story = $('#story p');
    var el_title = $('#story h2');

    block();

    function unblock()
    {
        log('unblocking');
        blocked = false;
        el_button.fadeTo('fast', 1.0);
    }

    function block()
    {
        log('blocking');
        blocked = true;
        el_button.fadeTo('fast', 0.4);
    }

    function show_story()
    {
        if (stories.length > 0) {
            story = stories.shift();

            log('showing story: ' + story.title);

            el_story.html(story.story);
            el_title.html('Your title is: \u201C<i>' + story.title + '</i>\u201D');
            setTimeout(function() { unblock(); }, 1000);
        }
    }

    function fetch_stories()
    {
        log('fetching');
        url = '/stories.json?stories=' + amount + '&ts=' + new Date().getTime();
        $.getJSON(url, function(data) {
            log('done fetching');
            $.each(data, function(i, story) {
                log('  ' + story.title);
                stories.push(story);
            });
            log('stories: ' + stories.length);
            show_story();
        });
        if (amount < 32) amount += amount;
    }

    function new_story()
    {
        log('new story requested');
        if (blocked) {
            log('blocked');
            return;
        }
        block();

        log('stories: ' + stories.length);

        if (stories.length > 0) {
            show_story();
        } else {
            fetch_stories();
        }
    }

    el_button.click(function() {
        log('button clicked');
        new_story();
    });

    fetch_stories();
});
