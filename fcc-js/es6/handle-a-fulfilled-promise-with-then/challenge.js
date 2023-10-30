// Solve the challenge in this JavaScript file
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  const responseFromServer = true;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject.error('Data not received');
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});
