let rlSync = require('readline-sync');

function giveName (placement) {
  let name = rlSync.question(`What is your ${placement} name?: `);
  return name;
}

firstName = giveName('first');
lastName = giveName('last');

console.log(`Hello, ${firstName} ${lastName}.`);
