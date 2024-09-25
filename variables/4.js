/*
The console outputs:
Good Morning, Victor
Good Afternoon, Victor
Good Evening, Victor

It then outputs and error due to NAME originally being declared as a constant and now being
attempted to be changed. We should have declared it with let if we wished to change the variable.
*/

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);