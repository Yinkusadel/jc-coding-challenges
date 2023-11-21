// Solve the challenge in this JavaScript file

const aVeryBigSum = (ar) => {
  let sum = 0;

  ar.forEach((element) => {
    sum += element;
  });

  return sum;
};

module.exports = aVeryBigSum;
