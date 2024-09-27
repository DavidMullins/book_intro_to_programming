let rlSync = require('readline-sync');

function multiply (num1, num2) {
  return num1 * num2;
}

let usersNum1 = rlSync.question(`What is the first number to multiply?: `);
let usersNum2 = rlSync.question(`What is the second number to multiply?: `);

console.log(`${usersNum1} x ${usersNum2} = ${multiply(usersNum1, usersNum2)}.`);
