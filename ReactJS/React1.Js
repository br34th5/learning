React.js is a JavaScript library. It was developed by engineers at Facebook.
// It's awesome and fast!

Take a look at the following line of code:
const h1 = <h1>Hello world</h1>;
The part that looks like HTML, <h1>Hello world</h1>, is something called JSX.

JSX is a syntax extension for JavaScript. It was written to be used with React. 
JSX code looks a lot like HTML.

Before the file reaches a web browser, 
a JSX compiler will translate any JSX into regular JavaScript.

JSX element can be saved in a variable, passed to a function, stored in an object or array...

A single JSX element can have many attributes, just like in HTML:
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;

If a JSX expression takes up more than one line, then you must wrap 
the multi-line JSX expression in parentheses. 

var myDiv = (<div>
    <h1> Hello world </h1>
  </div>)

Nested JSX expressions can be saved as variables, passed to functions, etc., 
just like non-nested JSX expressions can!


a JSX expression must have exactly one outermost element.
!!! This code will not work !!!:
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
The solution is usually simple: wrap the JSX expression in a <div></div>.


To render a JSX expression means to make it appear onscreen.

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

1. ReactDOM is the name of a JavaScript library.
2. ReactDOM.render() is the most common way to render JSX
	2.1 It takes a JSX expression, creates a corresponding tree of DOM nodes, 
	and adds that tree to the DOM
3. <h1>Hello world</h1> is the first argument being passed to ReactDOM.render()
	3.1 first argument should be a JSX expression, and it will be rendered to the screen.
4. 	document.getElementById('app') tells where on the screen should 
	that first argument appear (appending)!

One special thing about ReactDOM.render() is that it only updates 
DOM elements that have changed.
That means that if you render the exact same thing twice in a row, 
the second render will do nothing

@more for virtual DOM 
https://www.codecademy.com/articles/react-virtual-dom
