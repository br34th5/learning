Conditionals
You can not inject an if statement into a JSX expression!
1. One option is to write an if statement, and not inject it into JSX.

if (coinToss() === 'heads') {
    img = <img src={pics.kitty} />;
    } else {
    img = <img src={pics.doggy} />;
    }

ReactDOM.render(
  img,
  document.getElementById('app')
)


2. A more compact way to write conditionals in JSX: the ternary operator.
// https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
a ? b : c
If a is truthy, then the entire ternary operator returns b. 
If a is falsy, then the entire ternary operator returns c.

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
ReactDOM.render(
	img, 
	document.getElementById('app')
);


3. && works best in conditionals that will sometimes do an action, 
but other times do nothing at all.

const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> } // this code will run only if !baby is true?
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
Every time that you see && in this example, either some code will run, 
or else no code will run.


If you want to create a list of JSX elements,
then .map() is often your best bet.

const fish = ['Salmon', 'Trout', 'Lobster', 'Swordfish']
const fishList = fish.map(fishes => <li>{fishes}</li>);

ReactDOM.render(
  <ul>{fishList}</ul>,
  document.getElementById('app')   
);

We call .map() on this array of strings, and the .map() call 
returns a new array of <li>s.


Keys
When you make a list in JSX, sometimes your list will need 
to include something called keys.

A key is a JSX attribute. The attribute's name is key. 
The attribute's value should be something unique, similar to an id attribute.

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

const fishList = fish.map((fishes, i) =>
<li key={'fishes_' + i}>{fishes}</li>);


React.createElement
You can write React code without using JSX at all!

const h1 = <h1>Hello world</h1>;
can be rewritten without JSX, like this:
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

@ more https://facebook.github.io/react/docs/react-api.html	