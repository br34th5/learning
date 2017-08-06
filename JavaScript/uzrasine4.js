Function syntax

function takeOrder() {
  console.log("Order: pizza");
}

takeOrder();

// Parameters are variables that we can set when we call the function

function multiplyByThirteen(inputNumber) {
  console.log(inputNumber * 13);
}

multiplyByThirteen(9);
// Output: 117

Note on terminology: inputNumber is a parameter, but when we call multiplyByThirteen(9),
 the 9 is called an argument. 

// more parameters
function getRemainder(numberOne, numberTwo) {
  console.log(numberOne % numberTwo);
}

getRemainder(365, 27);
// Output: 14

// Using return
function getRemainder(numberOne, numberTwo) {
  return numberOne % numberTwo;
}

console.log(getRemainder(365, 27));
// Output: 14



exercise 

var orderCount = 1;

function takeOrder(topping, crustType) {
  orderCount === orderCount + 1
  console.log("Order: " + crustType + " pizza topped with " + topping);
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('extra cheese', 'thin crust');
takeOrder('bacon', 'hard crust');
takeOrder('chicken', 'crusty');
console.log(getSubTotal(orderCount));
console.log(getTotal());