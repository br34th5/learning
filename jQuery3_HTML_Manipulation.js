$(".info").append("<p>Stuff!</p>");
$(".info").prepend("<p>Stuff!</p>");

This will add a paragraph containing the text "Stuff!" inside all divs of class .info. 
.append() will make the paragraph the last child of each div
.prepend() will make the paragraph the first child of each div

.appendTo() does the same as .append(), but it just reverses the order of "what to add"
 and "where to add it." The code
$('<p>Stuff!</p>').appendTo('.info');


We can specify where in the DOM we insert an element with the .before() and .after() functions. The syntax looks like this:
$('target').after('<tag>To add</tag>');
// 'target' is the element after which you want to add something and the bit between <tag>s is the HTML element you want to add.
$(document).ready(function() {
    $('#one').after('<p>Text</p>');
    });


Moving elements around in the DOM is a snap: all we need to do is use the 
jQuery functions we just learned on existing elements instead of creating new ones
var $paragraph = $("p"); // existing element
$("div").after($paragraph); // Move it!
// Same as:
$("div").after($("p"));


.empty() deletes an element's content and all its descendants. For instance, if you .empty() 
an 'ol', you'll also remove all its 'li's and their text.
.remove(), not only deletes an element's content, but deletes the element itself.
$(document).ready(function() {
    var $pText = '<p>Text</p>'
    $('#two').after('<p>Text</p>');
    $('p').remove();
    });





