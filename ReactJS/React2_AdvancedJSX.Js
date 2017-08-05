// In JSX, you can't use the word class! You have to use className instead:
<h1 className="big">Hey</h1>
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

When you write a self-closing tag in JSX, you have to include the slash.
<br />
<img src="images/jenkins.png" />


JavaScript In Your JSX In Your JavaScript

var math = (
  <h1>2 + 3 = {2 + 3}</h1>
)
ReactDOM.render(math, document.getElementById('app'));

Everything inside of the curly braces will be treated as regular JavaScript.
Without {} code will be read as JSX.


You can access JS variables while inside of a JSX expression, 
even if those variables were declared on the outside.

const theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

const sideLength = "200px";
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);


You create an event listener by giving a JSX element a special attribute.
In JSX, event listener names are written in camelCase.
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
// https://facebook.github.io/react/docs/events.html#supported-events


