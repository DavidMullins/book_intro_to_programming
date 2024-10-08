let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches (arr, RegExp) {
  let newArray = [];
  
  arr.forEach(element => {
    if (RegExp.test(element)) {
      newArray.push(element);
    }
  });

  return newArray;
}


console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
