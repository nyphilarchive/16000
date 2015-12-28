/*!
 * Galereya v0.9.94
 * http://vodkabears.github.com/galereya
 *
 * Licensed under the MIT license
 * Copyright (c) 2013, VodkaBears
 */
(function ($) {
    'use strict';
    
    $().timelinr({
        orientation: 'vertical',
        // value: horizontal | vertical, default to horizontal
        containerDiv: '#timeline',
        // value: any HTML tag or #id, default to #timeline
        datesDiv: '#dates',
        // value: any HTML tag or #id, default to #dates
        datesSelectedClass: 'selected',
        // value: any class, default to selected
        datesSpeed: 'normal',
        // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
        issuesDiv : '#issues',
        // value: any HTML tag or #id, default to #issues
        issuesSelectedClass: 'selected',
        // value: any class, default to selected
        issuesSpeed: 'fast',
        // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
        issuesTransparency: 0.2,
        // value: integer between 0 and 1 (recommended), default to 0.2
        issuesTransparencySpeed: 500,
        // value: integer between 100 and 1000 (recommended), default to 500 (normal)
        prevButton: '#prev',
        // value: any HTML tag or #id, default to #prev
        nextButton: '#next',
        // value: any HTML tag or #id, default to #next
        arrowKeys: 'false',
        // value: true/false, default to false
        startAt: 1,
        // value: integer, default to 1 (first)
        autoPlay: 'false',
        // value: true | false, default to false
        autoPlayDirection: 'forward',
        // value: forward | backward, default to forward
        autoPlayPause: 2000
        // value: integer (1000 = 1 seg), default to 2000 (2segs)< });
});
    
$('#timeline').css("height", $(document).height()-200);
$('#issues li').css("height", $(document).height()-200);
$('#issues li img').css("height", $(document).height()-200);

}(jQuery));


$('#show-more').click(function(e){
    e.preventDefault();
    $('#intro-hidden').slideToggle();
    $(this).text( $(this).text() == 'Read More' ? "Show Less" : "Read More");
});

