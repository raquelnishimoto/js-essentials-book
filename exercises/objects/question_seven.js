// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let objKeys = Object.keys(myObj);
objKeys.qux = 3;

objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/*
Without running this code, can you determine whether these two snippets produce the same output? Why?

Answer: No, the callback in the forEach function will only iterate over the keys that are owned by the object objKeys.
In this case, only 'qux' is printed.
While, in the let in loop all the keys included the ones that are inherited byt its prototype are iteratable, therefore the inherited props foo and bar will also be printed out

*/