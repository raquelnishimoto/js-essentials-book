/*
There are other ways to detect a -0 value.
Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.

*/


function isMinusZero(value) {
  return 1 / value === -Infinity;
}

console.log(isMinusZero(0));
console.log(isMinusZero(-0));
console.log(isMinusZero(-1));
console.log(isMinusZero(1.2));
console.log(isMinusZero(-1.2));