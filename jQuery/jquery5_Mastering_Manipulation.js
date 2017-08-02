/* We'll build an interactive "to do" list that will add items to a checklist 
and remove them as they're checked off. */

We'll need to store the user's input in a variable, which will allow 
us to append that input to the body of the HTML document later on.

You can set a variable equal to the contents of the input field using .val(), like so:
//Get the value from an input
var input = $('input[name=checkListItem]').val();

1. Our selector finds our specific input using a css selector on our checkListItem input
2. We call val() to get the value of the field

$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        });
    });

Now we want to add our HTML element to the document.
/* Let's go ahead and append to our div with the .list class
We'll append a <div> with class="item", since we'll want a way 
to target our appended <div>s later when we remove them 

We'll want the contents of our div to be the contents of our input field, 
which we saved in the variable toAdd. That means when we append, we'll want to append: */
'<div class="item">' + toAdd + '</div>'

$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
        });
    });

// Remove what's been clicked 
You might think we could do this:
$('.item').click(function() {
    $(this).remove();
});
/* The problem is that it won't work—jQuery looks for all the .items when the DOM is loaded,
so by the time your document is ready, it's already decided there are no .items
to .remove(), and your code won't work. */

// For this, we'll need a new event handler: .on(). 
$(document).on('event', 'selector', function() {
    Do something!
});

In this case, 'event' will be 'click', 'selector' will be '.item', 
and the thing we'll want to do is call .remove() on this.

$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
        });
        
        $(document).on('click', '.item', function() {
            $(this).remove();
            });
    });
    