function evenOrOdd(number) {
  if (typeof number !== 'number') {
    console.log(`${number} is not a number`);
    return;
  }
  console.log(number % 2 === 0 ? 'even' : 'odd');
}

evenOrOdd('oo')