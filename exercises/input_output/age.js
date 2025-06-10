const rlSync = require('readline-sync');

const answer = rlSync.question("How old are you? ");

const years = [10, 20, 30, 40];

for (let year of years) {
  const age = year + parseInt(answer);
  console.log(`In ${year} years, you will be ${age} years old.`);
}