function evenOrOdd (int) {
  if (!Number.isInteger(int)) {
    console.log('You did not provide an integer value. Please try again.');
    return;
  }
  
  
  if (int % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(41);
evenOrOdd(64);
evenOrOdd('5');
