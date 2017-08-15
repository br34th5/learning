Put an Event Handler in a Component Class
class Example extends React.Component {
	// one event handler method
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  // second event handler method
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }	
    alert(speech);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}> // call an event
        Hello world
      </h1>
    );
  }
}


Pass an Event Handler as a prop
// You've defined a new method on the Talker component class.
// Now you're ready to pass that function to another component.

let's pass handleClick() method from talker.js component to button.js
... talker.js
  render() {
    return <Button onClick={this.handleClick} />;
  }
...
Great! You just passed a function from <Talker /> to <Button />.


Receive an Event Handler as a prop

If a user clicks on this <button></button> element, 
then you want your passed-in talk function to get called.

That means that you need to attach handleClick to the
<button></button> as an event handler.

give that JSX element a special attribute. 
The attribute's name should be something like onClick or onHover.
The attribute's value should be the !event handler! that you want to attach.

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
