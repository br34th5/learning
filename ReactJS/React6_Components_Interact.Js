Components Interact

/* React apps are made out of components, but what makes React 
special isn't components themselves. */
What makes React special is the ways in which components interact.

A Component in a Render Function
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}

// Crazy renders an <OMG />.

When a component renders another component, what happens 
is very similar to what happens when ReactDOM.render() 
renders a component.


Require A File

/* If you want to use a variable that's declared in a different 
file such as NavBar, then you have to 
import the variable that you want. */
To import a variable, you can use an import statement
import { NavBar } from './NavBar.js';
NOTE:
1. {} Curly braces
2. ./ will treat that string as filepath.


export and import are meant to be used together,
and you rarely see one without the other.
// more info http://exploringjs.com/es6/ch_modules.html#sec_overview-modules


Component Rendering In Action
