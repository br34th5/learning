React applications are made out of components.
A component is a small, reusable chunk of code that is responsible for one job.
That job is often to render some HTML.

import React from 'react';
import ReactDOM from 'react-dom';

// Component class variable names should be written in UpperCamelCase
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

By subclassing React.Component, you create a new component class. 
This is not a component! A component class is more like a factory 
that produces components. When you start making components, 
each one will come from a component class.

MyComponentClass is now a working component class!
It's ready to follow its instructions and make some React components.
(In this case MyComponentClass has one method, named render)

<MyComponentClass /> // component that gained all those methods

Whenever you make a component, that component inherits all of the methods 
of its component class. 


JSX elements can be either HTML-like, or component instances. 
JSX uses capitalization to distinguish between the two!
In a JSX element, that capitalized first letter says,
"I will be a component instance and not an HTML tag."


