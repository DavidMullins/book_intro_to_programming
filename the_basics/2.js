fullNumber = 4936;

ones = 4936 % 10;
console.log(`Ones place is: ${ones}.`);

onlyTens = fullNumber % 100;

tens = (onlyTens - ones);
console.log(`tens place is: ${tens/10}.`);

onlyHundreds = fullNumber % 1000;

hundreds = (onlyHundreds - onlyTens);
console.log(`hundreds place is: ${hundreds/100}.`);

thousands_digit = (fullNumber - hundreds - tens - ones)/1000;
console.log(`thousands place is: ${thousands_digit}.`);