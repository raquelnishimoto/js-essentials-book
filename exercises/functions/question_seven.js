// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

/*
The function "foo" has two parameters. On line 8, it is invoked passing only one parameter
which will be assigned as a first argument of the function's local variable. It will log the string "Hello",
and then 'undefined' because the second argument is implicitly assigned to the value of undefined when
we don't explicitly pass an argument during the function's invocation
*/