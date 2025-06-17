// Consider the following code:

function foo(bar) {
  console.log(bar, bar, bar);
}
const bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

/*
As written, this code will raise an error on line 9.
Without creating a new function or changing lines 8 or 9, update this code to work as intended.
*/

