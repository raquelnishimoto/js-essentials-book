// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*
This code will output 'Not empty'. Although the function 'isArrayEmpty' is invoked with an empty array '[]' as argument,
an empty array has a truthy value in JS. The condition on line 4 evalutes to true and the code block 4-6 is executed.
*/