function factorial(num) {
  let total = 1;
  for (num; num > 0; num -= 1) {
    total *= num;
  }

  return total;
}

console.log(factorial(5));
