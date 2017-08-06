// There are two kinds of loops we will learn in this lesson:

for loops, which let us loop a block of code a known amount of times.
while loops, which let us loop a block of code an unknown amount of times.
	/* also there's */ Do while

// Instead of writing out the same code over and over, let’s make the computer loop through our array for us.
/* Within the for loop's parentheses, */ the start condition is var i = 0, which means the loop will start counting at 0.
The stop condition is i < animals.length, which means the loop will run as long as i is less than the length of the animals array. 
The iterator is i++. This means that each loop, i will have 1 added to it.
And finally, the code block is inside the { ... }. The block will run each loop, until the loop stops.

// The secret to loops is that i, the variable we created inside the for loop's parentheses, is always equal to a number.
To be more clear, the first loop, i will equal 0, the second loop, i will equal 1, and the third loop, i will equal 2

!!! This makes it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand. !!!
// We can write a for loop, and replace the hard coded number with the variable i, like this: animals[i].

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

If we can make a for loop run forwards through an array, can we make it run backwards through it? Of course!
// We can make out loop run backwards by modifying the start, stop, and iterator conditions.

The start condition should set i to the length of the array.
The stop condition should end when i is 0.
The iterator should subtract 1 each time, which is done with i--.

for (var i = vacationSpots.length; i >= 0; i--) {
  console.log('I would love to visit: ' + vacationSpots[i]);
}

// Since JavaScript starts from 0, make the start condition the length of the vacationSpots array, minus 1.

for (var i = vacationSpots.length -1; i >= 0; i--) {
  console.log('I would love to visit: ' + vacationSpots[i]);
}

Remember, all for loops have three conditions, start, stop, and iterate, and we can edit all three!

The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.

var myPlaces = ["Lithuania", "Latvia", "Estonia"];
var friendPlaces = ["Japan", "USA", "Lithuania"];

for (var i = 0; i < myPlaces.length; i++ ) {
  console.log(myPlaces[i]);
  
  // Inner for loop runs every time when outter for loop runs!
  for (var j = 0; j < friendPlaces.length; j++) {
    console.log(friendPlaces[j]);
  }
}


// 1. Your first place printed, then all three of your friend's
// 2. Then your second place, then your friend's places again.
// 3. And then one more time.

!!! This is because the inner for loop runs completely every time the outer for loop runs once !!!

var myPlaces = ["Lithuania", "Latvia", "Estonia"];
var friendPlaces = ["Japan", "USA", "Lithuania"];

for (var i = 0; i < myPlaces.length; i++ ) {
  console.log(myPlaces[i]);
  
  for (var j = 0; j < friendPlaces.length; j++) {
    console.log(friendPlaces[j]);
    
    if (myPlaces[i] === friendPlaces[j]) {
    	// If it is, log to the console the place you have in common.
      console.log(i);
    }
  }
}