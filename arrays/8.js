let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (arr) {
  return arr.reduce((onlyOdds, string) => {
    if (string.length % 2 !== 0) {
      onlyOdds.push(string.length);
    }

    return onlyOdds;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]

/*
Definiteely had to use the hiunt and solution some to come up with this. Had
the idea of it loosely but was encountering several errors. The 2 returns
kept tripping me up.
*/
