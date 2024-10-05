function foo(bar) {
  console.log(bar());
}

foo(function() {return 'Welcome'});    // Should print 'Welcome'
foo(function() {return 3.1415});    // Should print 3.1415
foo(function() {return [1, 2, 3]});    // Should print [1, 2, 3]

/*
Took me a bit to see this because I kept looking for a more complicated solution.
Didn't realize it was as simple as passing in a function directly as an
arguement at first.
*/
