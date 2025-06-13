// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
This code logs 1 on the console and executing the function foo does not affect the output.
The reason is that on line 5 bar is initialised with the let keyword creating a new scope and shadowing the global variable declared on line 3.
The variable bar on line 5 is a new variable and although they share the same name they are two different variables.
*/

