let rlSync = require('readline-sync');

let numberOne = rlSync.question('Enter first number: \n');
let numberTwo = rlSync.question('Enter second number: \n');
let sum = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(`The numbers ${numberOne} and ${numberTwo} add to ${sum}`);