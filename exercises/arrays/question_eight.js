/*
* Write a function similar to the oddLengths function from Exercise 6,
* but don't use map or filter. Instead, try to use the reduce method.
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(input) {
  return input.reduce((acc, curr) => {
    if (typeof curr === 'string' && curr.length % 2 !== 0) {
      acc.push(curr.length);
    }
    return acc;
  }, []);
}