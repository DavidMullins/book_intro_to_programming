function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

/*
The assignment was the use recursion to refactor the 2.js answer form this chapter.
I spent about 5 minutes trying to think through how to accomplish this but had
to look at the solution. After reviewing it, I was able to follow the logic
but think it will take some time and practice to get to where I could of
thought up this process myself :(
*/
