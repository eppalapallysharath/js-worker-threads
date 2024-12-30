const worker = new Worker("worker.js");

const calc_btn = document.getElementById("calculate-btn");

calc_btn.addEventListener("click", (event) => {
  worker.postMessage("sndaj");
});

worker.onmessage = function (message) {
  console.log(message.data);
  alert("final sum is " + message.data);
};

const background_btn = document.querySelector("#background-btn");

background_btn.addEventListener("click", () => {
  if (document.querySelector("body").style.background !== "tomato") {
    document.querySelector("body").style.background = "tomato";
  } else {
    document.querySelector("body").style.background = "white";
  }
});
