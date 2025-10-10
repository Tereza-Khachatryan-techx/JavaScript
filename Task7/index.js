const startbtn = document.querySelector(".start-tick");
const stopBtn = document.querySelector(".stop-tick");
const tickContiner = document.querySelector(".tick-container");

let tickInterval;
startbtn.addEventListener("click", () => {
  tickContiner.textContent = "";
  tickInterval = setInterval(() => {
    tickContiner.textContent += " Tick";
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(tickInterval);
});
