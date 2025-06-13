const rlSync = require('readline-sync');

function ask(question) {
  return rlSync.question(question);
}

const firstName = ask('What\'s your first name? ');
const lastName = ask('What\'s your last name? ');
console.log(`Hello, ${firstName} ${lastName}`);