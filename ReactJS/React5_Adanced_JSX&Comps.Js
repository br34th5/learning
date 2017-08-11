// Use Multiline JSX in a Component

class Component extends React.Component {
  render() {
    return (
      <div> 
      A multi-line JSX expression should always be wrapped in parentheses!
      </div>
    );
  }
}


// Use a Variable Attribute in a Component

const redPanda = {
  src: 'http://bit.ly/1U92LL3',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src} // THIS IS HOW you can use Variable atributes
          alt={redPanda.alt} 
          width={redPanda.width} />
      </div>
    );
  }
}


// Put Logic in a Render Function

class Random extends React.Component {
  render() {

    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random()*10+1);

    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}


// Use a Conditional in a Render Function
const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    // If fiftyFifty is true, then TonightsPlan should render this element:
    if (fiftyFifty) {
      return <h1>Tonight I am going out WOOO</h1>;
    } else {
      return <h1>Tonight I am going to bed WOOO</h1>;
    }
  }
}


// Use this in a Component
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}

IceCreamGuy has two methods: .food and .render(). 
Since this will evaluate to an instance of IceCreamGuy,
this.food will evaluate to a call of IceCreamGuy's .food method.
this.food is a getter method.


// Use an Event Listener in a Component
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}

An event handler is a function that gets called in response to an event
In the above example, the event handler is myFunc().

In React, you define event handlers as methods on a component class:
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>;
    );
  }
}