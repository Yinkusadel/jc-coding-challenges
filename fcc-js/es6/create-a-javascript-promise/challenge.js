// Solve the challenge in this JavaScript file
const makeServerRequest = new Promise((resolve, reject) => {
  let response;

  if (response) {
    resolve('test passed');
  } else {
    reject.error('test failed');
  }
});

console.log(makeServerRequest());
