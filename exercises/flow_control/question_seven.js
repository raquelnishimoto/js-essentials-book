function getAllCapsIfLong(word) {
  if (word.length > 10) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

console.log(getAllCapsIfLong('hello 45621'));