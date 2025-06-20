// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
The function `doSomething` has one parameter. In the body of the function
it takes the argument - assuming it is a string - calling the instance method `split`
where it firstly returns an array with elements split where there is a space. Secondly, it calls
the instance method `reverse` on the returned array and returns the original array with the elments in reversed orders.
Finally, it calls the higher order function `map` which loops through the elements returned by the previous
function and returns another new array where for each element the value is the return value of element's length property.

*/