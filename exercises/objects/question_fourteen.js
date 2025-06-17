/*
Identify all of the variables, object property names, primitive values, and objects
shown in the following code (assume the code has not been executed).
Don't panic if you miss a few items - this exercise is more challenging than it looks.
*/

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// variables: hello, greeting, name, xyzzy, howdy, foo

// object property names: a, b, c, d, including indexed props: 0, 1, 2

// primitive values: 'Hi', 'Grace', 1, 2, 3, 4, 5, a, b, c, d, including indexed props: 0, 1, 2 and ' '

// objects: { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}, hello(), xyzzy()