let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers (arr) {
  return arr.filter(value => Number.isInteger(value))
  }

let integers = findIntegers(things);
console.log(integers);
 