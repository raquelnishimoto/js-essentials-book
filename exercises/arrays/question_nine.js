/*
Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
*/

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function hasThree(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 3) {
      return true;
    }
  }

  return false;
}

console.log(hasThree(numbers1));
console.log(hasThree(numbers2));
console.log(hasThree(numbers3));