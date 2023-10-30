// Solve the challenge in this JavaScript file
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  const responseFromServer = false;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject.error('Data not received');
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

makeServerRequest.catch((error) => {
  console.log(error);
});
