When we write variables inside a function, only that function has access to its own variables. 
Therefore, they are in the functional scope.

In addition to a function having access to its own variables, it also has access to variables in the global scope.

// both variables are in the global scope
var laundryRoom = 'Basement'
var mailRoom = 'Room 1A'

This unit introduced you to scope.

Scope is the idea in programming that some variables are acessible/inaccessible from other parts of the program.
Global Scope refers to variables that are accessible to every part of the program.
Functional Scope refers to variables created inside functions, which are not accessible outside of its block.