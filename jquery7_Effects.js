$('div').animate({top:'+=10px'},500);
/* where the bit between curly braces says "hey, jQuery! Add 10 pixels 
to the current top margin," and the second input says "do it in 500 milliseconds!" 
(1,000 milliseconds = one second.) */


Time to blaze new jQuery trails with a new jQuery library: jQuery UI.
jQuery UI includes a number of ultra-fancy animations you can use to make your websites do incredible things.

// <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>

$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
        });
    });

$(this).effect('bounce', {times:3}, 500);
$(this).effect('slide');
// More at http://jqueryui.com/

/* The .effect() effect has all kinds of magical goodness in it, but it's 
not the most amazing thing jQuery UI can do */

/* The library has a number of built-in effects that can make your 
website look sleek and professional with surprisingly little code. */

jQuery UI includes a .draggable() function that can make any HTML element draggable

$(document).ready(function() {
    $('ol').selectable();
    });


What if we want to reorder the elements in our list?
$(document).ready(function() {
    $('ol').sortable();
    });

$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

