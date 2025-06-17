// Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');


// variables: bar, arg1, arg2, foo, qux, result

// object property names: abc, def, ghi, jkl, mno, pqr, including indexed array elements: 0, 1, 2, 3 and 0, 1, 2

// primitive values: 'Victor', 'Antonina', 'Hello', abc, def, ghi, jkl, mno, pqr, null, NaN, 1, 2, 3, 4, 5, 6 including indexed array elements: 0, 1, 2, 3 and 0, 1, 2

// objects: bar, { abc: [1, 2, 3, [4, 5, 6]],
  //   def: null,
  //   ghi: NaN,
  //   jkl: foo,
  //   mno: arg1,
  //   pqr: arg2,
// }, [1, 2, 3, [4, 5, 6]], [4, 5, 6]
