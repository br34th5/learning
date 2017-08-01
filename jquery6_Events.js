$(document).ready(function() {
    $('div').fadeOut('slow');
    });

$(document).ready(function() {
    $('div').click(function() {  // or with The .dblclick() Event
        $(this).fadeOut('fast');
        });
    });

$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast');
        });
    $('div').hover(function() {
        $(this).addClass('red');
        });
    });

Hover
$('div').hover(
    function(){
      $(this).addClass('highlight');
   },
   function(){
      $(this).removeClass('highlight');
   }
);
//two functions(){} separated by a comma. The comma is very important!

/* Let's .focus()
We say an element has focus when we click on it or tab over to it.
If you've ever filled out a form on a web page and seen how each text 
box lights up when you tab to it or click on it, you've seen focus in action! */

 $(document).ready(function() {
    $('input').focus(function() {
        $(this).css('outline-color', '#FF0000');
        });
    });


 The .keydown() event is triggered whenever a key on the keyboard is pressed.
 It only works on whatever page element has focus.

 The .animate() effect takes two inputs: the animation to perform,
 and the time in which to perform the animation.

$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left:'+=10px'}, 500);
        });
});


Now it's time to animate our character based on the user's input from the keyboard.
Every key press on a keyboard is translated into a number for the computer to use. 


$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});