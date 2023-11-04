// Solve the challenge in this JavaScript file
const quoteSample = '3 blind mice.';
const myRegex = /[^aeiou^0-9]/gi; // Change this line
const result = quoteSample.match(myRegex); // Change this line

console.log(result);

