let rlSync = require('readline-sync');
let firstName = rlSync.question('What is first your name? ');
let lastName = rlSync.question('What is last your name? ');

console.log(`Hello, ${firstName} ${lastName}!`);