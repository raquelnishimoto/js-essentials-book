const rlSync = require("readline-sync");

function getNumber(question) {
  return parseFloat(rlSync.question(question));
}

function multiply(a, b) {
  return a * b;
 }

const numberOne = getNumber('Enter the first number: ');
const numberTwo = getNumber('Enter the second number: ');

console.log(`${numberOne} * ${numberTwo} = ${multiply(numberOne, numberTwo)}`);

