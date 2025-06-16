/*
* Use map and filter to first determine the lengths of all the elements in an array of string values,
* then discard the even values (keep the odd values).
*/

function oddLengths(input) {
  return input.map(e => {
    if (typeof e === 'string' && e.length % 2 !== 0) {
      return e.length;
    }
  }).filter(x => x !== undefined);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]