// Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(input) {
  return input.reduce((acc, curr) => acc + (curr * curr), 0);
}