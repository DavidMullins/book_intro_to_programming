function is0 (value) {
  
  if (1/value === Infinity) {
    console.log('Arguement is 0');
  } else {
    console.log('Arguement is -0');
  };
}

is0(0);
is0(-0);
