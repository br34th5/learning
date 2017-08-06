With plain JavaScript we selected an HTML element with this code:

document.getElementsByClassName('skillset');

With jQuery we can select the same element with:
$('.skillset');
or id:
$('#header').

We can hide elements with jQuery, like this:
$('.my-selector').hide();

The hide function will add the CSS property display: none to the DOM element from the page, which will hide it.

In order to fade in the skillset element, we can use a the jQuery function named fadeIn.
$('.example-class').fadeIn(400);
// The example code will fade in the '.example-class' element over 0.4 seconds.


This function will wait for a click event, and when one occurs, it will execute a provided function. The syntax looks like this:
$('.example-class').on('click', function() {
  // execute the code here when .example-class is clicked.
});

To make our projects visible when the 'Recent Projects' button is clicked, jQuery provides a function named show, which is the opposite of hide.
$('.example-class').show();
// show will change the CSS attribute display: none to a visible display property

toggle will hide or show an element, each time it is triggered. The syntax looks like this:
$('example-class').toggle();

We can toggle a CSS class with a jQuery function named toggleClass. The syntax looks like this:
$('.example-class').toggleClass('active')
// Notice that toggleClass does not require us to include the period before 'active' since it's already expecting a CSS class.


We can select the specific element we clicked on with the jQuery selector $(this).
The syntax looks like this:
$('.example-class').on('click', function() {
  $(this).toggleClass('active');
});







exercise

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    $('.projects').show(); // toggle is better here
  })
}

$(document).ready(main);