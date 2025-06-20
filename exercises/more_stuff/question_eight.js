/*
Challenging Exercise This exercise has nothing to do with this chapter.
Instead, it uses concepts you learned earlier in the book.
If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise.
You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods,
write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

*/

function isNotANumber(value) {
  // return value.toString() === 'NaN';
  return value !== value;
}

console.log(isNotANumber(-1));
console.log(isNotANumber(15));
console.log(isNotANumber(23.67));
console.log(isNotANumber('3.6j'));
console.log(isNotANumber(0.0));
console.log(isNotANumber(NaN));
console.log(isNotANumber('NaN'));
console.log(isNotANumber({}));
console.log(isNotANumber({3: 5}));
