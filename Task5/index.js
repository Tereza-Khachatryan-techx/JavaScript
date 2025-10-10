const jokeBtn = document.querySelector(".get-joke-btn");
const jokeContainer = document.querySelector(".joke");

jokeBtn.addEventListener("click", async () => {
  const url = "https://icanhazdadjoke.com/";
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      throw new Error("Network error");
    }
    const data = await res.json();
    jokeContainer.textContent = data.joke;
  } catch (err) {
    jokeContainer.textContent = "Failed to load joke";
  }
});
