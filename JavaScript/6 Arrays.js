One way we organize data in real life is to make lists. 

// they are ordered, meaning the position of each list item is numbered by JavaScript.
var bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
var listItem = bucketList[0];
console.log(listItem);
// Output: 'Rappel into a cave'

// You can also access each individual character in a string the same way you do with arrays. For instance, you can write:
var hello = 'Hello World';
console.log(hello[6]);
// Output: W

/* To know how many items are inside of an array, We can find by using one of an array's built in properties, called */ .length
var bucketList = ['Rappel into a cave', 'Take a falconry class'];

console.log(bucketList.length);
// Output: 2

.length // is also a property for strings.
var hello = "Hello world!"
console.log(hello.length);
// output: 12

push() // allows us to add items to the end of an array. 
var bucketList = ['item 0', 'item 1', 'item 2'];

bucketList.push('item 3', 'item 4');
// Connecting a function like this is common in JavaScript. Think: we've been connecting .log to console this whole time!

pop() // is similar to push(), except that it deletes the last item of an array
You can learn more array methods:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array