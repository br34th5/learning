We write a single line comment with // and a multi-line comment with /* and */.

We can generate a random number with Math.random, then make it a whole number with Math.floor.

To check if two things equal each other, we can use === (three equals in a row).
To check if two things do not equal each other, we can write !== (exclamation with two equals in a row).

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

function getRemainder(numberOne, numberTwo) {
  return numberOne % numberTwo;
}

console.log(getRemainder(365, 27));
// Output: 14

Global Scope refers to variables that are accessible to every part of the program.
Functional Scope refers to variables created inside functions, which are not accessible outside of its block.

push() // allows us to add items to the end of an array. 
var bucketList = ['item 0', 'item 1', 'item 2'];
pop() // is similar to push(), except that it deletes the last item of an array

-- Loops --
for loops allow us to repeat a block of code a known amount of times.
We can use a for loop inside another for loop to compare two lists.
while loops are for looping over a code block an unknown amount of times.

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

while (currentCard !== 'Spade') {
  // code block that loops until condition is false
}

getting a random number
  var randomNumber = 
      Math.floor(Math.random() * 4);