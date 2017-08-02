Adding and Removing Classes

functions, .addClass() and .removeClass(), that can be used to add or remove a class 
from an element. This is great if, for example, you have a highlighted class that you want
to apply to an element when clicked.

$('selector').addClass('className');
$('selector').removeClass('className');

where 'selector' is the HTML element you want and 
'className' is the class name you want to add or remove.

/* Remember: You aren't selecting anything, you are modifying your element. 
This means that you do not need # or . before your class. */

$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('highlighted'); // or toggleClass
        });
    });


Because resizing elements is so common, jQuery has specific .height() 
and .width() functions that can be used to change the heights and widths of HTML elements
$("div").height("100px");
$("div").width("50px");

$("div").css("background-color","#008800");
// would give all <div>s on the page a green background color. 
// You can modify any element's CSS attributes this way.

$(document).ready(function() {
    $('div').height('200px');
    $('div').width('200px');
    $('div').css("border-radius", "10px");
    });


Modifying Content

We can update the contents of our HTML elements using
.html() and .val() functions.

.html() can be used to set the contents of the first element match it finds. For instance,
$('div').html();
// will get the HTML contents of the first div it finds
$('div').html("I love jQuery!");
// will set the contents of the first div it finds to "I love jQuery!"

.val() is used to get the value of form elements. For example
$('input:checkbox:checked').val();
// would get the value of the first checked checkbox that jQuery finds.

