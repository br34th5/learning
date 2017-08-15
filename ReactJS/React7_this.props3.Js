-------- From this point it's getting harder for me --------

handleEvent, onEvent, and this.props.onEvent

1. If you are listening for a "click" event, then 
you name your event handler handleClick
1.1 If you are listening for a "keyPress" event, then handleKeyPress
2. And Your prop name should be the word on, plus your event type.


// Button.js

// The attribute name onClick
// creates an event listner:
<button onClick={this.props.onClick}>
  Click me!
</button>

// Talker.js

// The attribute name onClick
// is just a normal attribute name:
<Button onClick={this.handleClick} />

The reason for this is that in <Button /> is not an HTML-like JSX element;
// it's a component instance.

// Names like onClick only create event listeners if they're used on
HTML-like JSX elements. Otherwise, they're just ordinary prop names. 


this.props.children

/* this.props.children will return everything in between a 
component's opening and closing JSX tags. */

<BigButton> // opening JSX tag
  I am a child of BigButton.
</BigButton> // closing JSX tag


If a component has more than one child between its JSX tags, 
then this.props.children will return those children in an array.
However, if a component has only one child, then this.props.children 
will return the single child, not wrapped in an array.

@ more at this.props.children folder


defaultProps

class Button extends React.Component {
  render() {
    return (
      <button> {this.props.text} </button>
    );
  }
}

Button.defaultProps = { text: 'I am a button'};

<button> expects to receive a prop named text. The received text 
will be displayed inside of a <button></button> element.
If nobody passes any text to <button>, then <button>'s display will be blank.
It would be better if <button> could display a default message instead.

If an <Button /> doesn't get passed any text, 
then it will display "I am a button"
If an <Button /> does get passed some text, 
then it will display that passed-in text.

ReactDOM.render(
  <Button text="Passed-in text"/>, 
  document.getElementById('app')
);
