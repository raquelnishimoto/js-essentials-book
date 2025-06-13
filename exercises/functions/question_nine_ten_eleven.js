//dentify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
multiply, left, right, product
getNumber, prompt, parseFloat, question
left, right
console, log

*/

//Using the code from Exercise 9, classify each variable name as either global or local.

/*
global: multiply, getNumber, console, question parseFloat, left (line 12), right (line 13)
local: left, right (line 3), product, prompt

*/

// Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

/*
No, they are not. Although they share the name name, left and right on lines 1 and 2 are local variables
scoped to the body of the function "multiply", while left and right on lines 12 and 13 are global variables assigned
to the return value of the function getNumber. The parameter values shadow the variables on lines 12 and 13

*/