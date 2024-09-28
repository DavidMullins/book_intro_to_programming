function capsIfLong (str) {
  if (str.length > 10) {
    console.log(str.toUpperCase());
  } else {
    console.log(str);
  }
}

capsIfLong('javascript');
capsIfLong('programming');
