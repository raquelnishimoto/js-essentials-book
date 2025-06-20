// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
This code logs out the mutated value which both array1 and array2 references '[1, 4, 3]'.
On line 3 array1 is assigned to an array with a value of [1, 2, 3]. On line 4 a new array `array2` is declared and intialised with the
reference to array1's value. array1 creates an alias to array2. On line 5, we access the value of element at index 1 and assign a new value to it `4`,
since both variables `array1` and `array2` point to the same value in memory both of their values are also mutated.
*/