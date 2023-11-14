// Solve the challenge in this JavaScript file
const quoteSample = 'The five boxing wizards jump quickly.';
const nonAlphabetRegex = /\W/g; // Change this line
const result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);
