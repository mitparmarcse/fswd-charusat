//a)Scope:
//i) Using Var: function
testScope() {
var variable = "Hello, world!";
} testScope(); console.log(variable); // Output:
"Hello, world!"
Output:
"Hello, world!"
// ii) Using let:
function testScope() {
let variable = "Hello, world!";
} testScope();
console.log(variable);
Output:
// Uncaught ReferenceError: variable is not defined
// iii) Using const:
function testScope() {
const variable = "Hello, world!";
}
testScope();
console.log(
variable);

// Output:
// // Uncaught ReferenceError: variable is not defined
// b)Hoisting:
case1:
x = 5; // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element
var x; // Declare x

Case2:
Using let and const variables:
carName = "Volvo";
let carName;
// Output:
// ReferenceError
carName = "Volvo";
const carName;
// Output:
// This code will not run.