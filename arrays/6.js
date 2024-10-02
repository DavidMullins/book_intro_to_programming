let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (arr) {
  let lengths = arr.map(value => value.length);
  return lengths.filter(value => value % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
