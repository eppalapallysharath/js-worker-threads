onmessage = function (message) {
  console.log(new Date().getTime());
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  let sum = array.reduce((acc, val) => {
    return acc + val;
  }, 0);
  console.log(array);
  postMessage(sum);
  console.log(new Date().getTime());
};
