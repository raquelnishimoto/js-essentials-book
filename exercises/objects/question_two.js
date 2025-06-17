// Which of the following values are valid keys for an object?

// 1, '1','hello world','true', true, undefined

let myObj = {}
myObj[true] = 'hello'
myObj['true'] = 'world'
console.log(myObj[true])
