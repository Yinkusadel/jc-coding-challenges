// Solve the challenge in this JavaScript file
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject.error('Data not received');
  }
});

console.log(makeServerRequest());
