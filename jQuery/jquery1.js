With jQuery you can drag elements around the page, open and close sliding panels, animate HTML elements,
 or add new elements to our HTML pages simply by clicking a button.

// It's by interacting with the DOM that jQuery is able to access and modify HTML

Just as with an HTML document, elements in the DOM can have parents, children, and siblings.

$(document).ready(function() {
    $("div").fadeOut(1000);
});
// when the HTML document loads, the code will select an HTML element and make it disappear.

<script type="text/javascript" src="script.js"></script>


$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide();
    });
});
/ mouseenter() produces a change when your mouse enters a given HTML element.
// Instead of hide(), however, we'll place fadeTo()
// fadeTo() takes two arguments, or inputs
// speed at which to fade, and the opacity 
fadeTo('fast', 0.25);

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
        });
    });
    
$(document).ready(function() {
    $('div').mouseleave(function() { // it also can be click.();
        $('div').fadeTo('fast', 0.5);
        });
    });
// http://api.jquery.com/mouseleave/

