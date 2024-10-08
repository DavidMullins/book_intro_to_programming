function isNotANumber (value) {
  return value !== value;
};

console.log(Number.isNaN('test'));
console.log(Object.is(NaN, NaN));
console.log(isNotANumber(NaN));
console.log(isNotANumber('test'));
console.log(isNotANumber(1));

/*
At first I wrote something that didnt give correct results and had to go back and read
again about NaN to relearn that NaN does not === NaN
*/
