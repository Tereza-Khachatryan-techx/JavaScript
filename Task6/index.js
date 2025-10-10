const countButton = document.querySelector(".countDownBtn");
const countContainer = document.querySelector(".count-container");

countButton.addEventListener("click", () => {
  let count = 5;
  countContainer.textContent = count;

  function decrement() {
    if (count > 0) {
      setTimeout(() => {
        count--;
        countContainer.textContent = count;
        decrement();
      }, 1000);
    } else {
      setTimeout(() => {
        countContainer.textContent = "Go!";
      }, 1000);
    }
  }

  decrement();
});
