/*
The console prints returns an error due to the variable being declared within a block and therefore
out of scope for where the call occurs within console.log()
*/

{
  let foo = 'bar';
}

console.log(foo);