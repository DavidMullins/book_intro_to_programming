/*
line 1 intialized a variable foo to 'bar'. On line 3, and within a block, it then declares a
variable foo to be set to 'qux', but this is only within the scope of the block. When console.log()
points to foo, it will point to the foo that was declared in scope and therefore return 'bar'
*/