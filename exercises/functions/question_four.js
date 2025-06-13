// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*
  If you run this code on node it will return undefined and will not log anything to the console
  The reason is that on line 5 in the body of the function scream,  the return statement will stop the excution
  of the code and returns the value whichever expression comes after it, which in this case is implicitly undefined
  The method console.log will never be reached and invoked.
 */