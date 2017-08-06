// In programming, making decisions with code is called control flow.

// That's all programming really is: a list of instructions for computers.
// The main difficulty of being a developer is translating our ideas in human-speak into ideas in computer-speak.


/* 
Let's start with human-speak. Many decisions we make everyday boil down to this sentence in some form:
"If something is true, let's do option 1, or else, if it is false, let's do option 2." */

var harryPotterFan = false;
if (harryPotterFan) {
  console.log('Mischief managed.');
} 
else {
  console.log('I lead a muggle\'s life.');
}

// If the variable harryPotterFan is true, JavaScript will run one code block, and if a variable is false, it will run another.

var hungerLevel = 5;
if (hungerLevel > 7) {
  console.log('Time to eat!');
}
else {
  console.log('Let\'s eat later.');
}

/*To check if two things equal each other, we can use === (three equals in a row).
To check if two things do not equal each other, we can write !== (exclamation with two equals in a row). */

var moonPhase = 'full';
if (moonPhase === 'full') {
  console.log('Howwwwlll!!');
}
else {
  console.log('I swear I am not a werewolf...');
}

//output: Howwwwlll!!

// else if

var stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


To say "both must be true," we can use &&.
To say "either can be true," we can use ||.
To say "I want to make sure this is the opposite of what it really is," we can use !.
To say "these should not be equal to each other," we can use !==.

var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' || foggyNight === true) {
  console.log('Howwwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// output: Howwwwlll!!

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.
To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read. 

var groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// case is like "Else if"
// default is like "else"