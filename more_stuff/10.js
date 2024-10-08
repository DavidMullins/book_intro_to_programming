/*
It will return 5. The string gets coerced into a number. Since the ++ is 
AFTER the y and NOT BEFORE, it will increment the value to of y to 6 but 
return 5 still. If is was ++y, it would return 6.
*/

let y = "5"
console.log(++y);
