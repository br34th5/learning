Variables are a place for us to store information for use at a later time. 

var lucky = 7;
var name = "Codecademy";
var $p = $('p');

Anything you can target with CSS, you can modify with jQuery.
$('p').fadeTo('slow', 0);
$('li').fadeTo('slow', 0);
$('p, li').fadeTo('slow', 0);

// Very important part of $(this) - it selects only current element!
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});

Toggling a Panel .slideToggle()
we need to tell .click() what to do. In this case, when our pull tab is clicked, we want our sliding panel (with the class .panel) to open or close
$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
        });
    });

more
http://learn.jquery.com/