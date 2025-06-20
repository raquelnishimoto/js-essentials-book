// Given a list of numbers, write some code to find and display the largest numeric value in the list.

/*
List	Max
1, 6, 3, 2	6
-1, -6, -3, -2	-1
2, 2	2
*/

const findMaxNumber = (list) => Math.max(...list);

console.log(findMaxNumber([1, 6, 3, 2]))
console.log(findMaxNumber([-1, -6, -3, -2]))
console.log(findMaxNumber([2, 2]))