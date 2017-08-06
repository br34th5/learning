For example, if we have a deck of cards and we want to flip cards (loop a card flipping function) until we get a 'Spade', how could we write that in JavaScript?

while (condition) {
  // code block that loops until condition is false
}

The loop begins with the keyword while
Inside the parentheses, we can insert a condition. As long as the variable evaluates to true the block of code will loop.	
// Inside the code block we can write any code we'd like to loop.

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart'

while (currentCard !== 'Spade') {
       console.log(currentCard);
  
  var randomNumber = 
      Math.floor(Math.random() * 4);
  
  currentCard = cards[randomNumber];
       }

console.log("Spade is found!");