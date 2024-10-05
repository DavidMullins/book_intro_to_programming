let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

console.log(myObj);

/*
Different output. snippet 2 will iterate through the new object and its prototype.
snippet 1 will iterate just through myObj's own properties.

I got this one wrong. I misteaked keys for values. Original response below:

They will not be the same output.
snippet 1 will iterate through the array and log the value of each index, the keys.
snippet 2 will iterate through the original object. since key is not a keey value, it
will return undefined. It should instead use, console.log(myObj[key]);
*/