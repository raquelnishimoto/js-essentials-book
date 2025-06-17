// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
on line 15 the function 'bar' is invoked with two arguments, the first one is an object assigned to foo and the second is a string assigned to qux
the argument foo is pass by reference meaning that the variable argument1 points to the same space in memory as foo.
On the other hand, the argument qux is pass by copy meaning that the variable argument2 takes a copy of the primite value assigned to qux.
in the body of the function on line 11, argument1 is added a new property 'a'. This will mutate the object which argument1 references,
while the argument2 is assigned to a new value and its scope is local to the function.
The result of invoking the method console.log() on lines 17 and 18 will be 'hi' and 'hello'. The reason being that foo was mutated in the function while
qux was not.
*/