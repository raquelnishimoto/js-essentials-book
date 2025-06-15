// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
invoking the function barCodeScanner with the string '113' as argument, will match the case where serial equals '113' and print out 'Product2' to the terminal.
Since the code block following case '113' does not have a break statement the execution of will fall-through the to case '142' and default, printing out
'Product3' and 'Product not found!'.

*/