<script src="js/main.js"></script>

The Document Object Model, commonly referred to as the DOM', is the term for elements in an HTML file. 
Elements are any HTML code denoted by HTML tags, like <div>, <a>, or <p>. Let's use JavaScript to interact with the DOM.

to select HTML elements using the syntax: document.getElementsByClassName

A great library for interacting with the DOM is jQuery.

Once linked, we'll need to make sure our HTML is loaded before we run our jQuery and JavaScript code. 
<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>

$(document).ready(main);

With jQuery we can select the same element with:

$('.skillset');