// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

/*
The function foo is declared with two paramenters, but on line 8 it is invoked with 3 arguments.
During the execution of the code the third argument will be ignored and the program will output
the first and second argument values 42 and 3.1415
*/