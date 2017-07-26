<script src="js/main.js"></script>

The Document Object Model, commonly referred to as the DOM', is the term for elements in an HTML file. 
Elements are any HTML code denoted by HTML tags, like <div>, <a>, or <p>. Let's use JavaScript to interact with the DOM.


We can select an HTML element with JavaScript by selecting its class attribute, like this:

var header = document.getElementsByClassName('example-class-name');

This would find an element like this in the HTML:
<div class='example-class-name'> ... </div>


To better interact with DOM elements, we can use a library. A library is a set of code that contains useful pre-written functions that help with certain tasks.

A great library for interacting with the DOM is jQuery.
<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>

$(document).ready(main);

With jQuery we can select the same element with:
$('.skillset');

---

$('.example-class').on('click', function() {
  $(this).toggleClass('active'); // or  $(this).next().toggle(); or $(this).next().slideToggle(400);
});
// $(this) selects the clicked element. If there are multiple elements with a class of .example-class, this will only toggle the class of the one that is clicked on.
// Notice that $(this) does not require quotes around it, since it is not a CSS class. Instead, this is a JavaScript keyword.


<div class='item-one'> ... </div>
<div class='item-two'> ... </div>
If we wanted to hide item-two, we could write:

$('.item-one').next().hide();


We can change the text of an element with the jQuery function text. It's syntax looks like this:
$('.my-selector').text('Hello world!');
!! Inside of text's parentheses, we can provide text that will become the text of our DOM element.
 The text we supply will replace any existing text, and if the element has no pre-existing text, text will add it. !!


jQuery provides a method named slideToggle that can animate an element's entrance and exit. The syntax looks like this:
$('.example-class').slideToggle(400);
