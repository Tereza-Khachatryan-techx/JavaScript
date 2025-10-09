// const cookieBanner = document.querySelector('cookie')
// const acceptBtn = document.querySelector('accept')

// function setCookie(name, value, days){
//     const d = new Date()
//     d.setTimeout(d.getTime() + (days * 24 * 60 * 60 * 1000));
//     document.cookie = ${name} = ${value};
// }

const cookieBanner = document.querySelector(".container");
const acceptBtn = document.querySelector(".accept");
const messageDiv = document.querySelector(".message");

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name) return val;
  }
  return null;
}

if (getCookie("consent") === "true") {
  cookieBanner.style.display = "none";
  messageDiv.textContent = "Cookies accepted and saved!";
}

acceptBtn.addEventListener("click", () => {
  setCookie("consent", "true", 7);
  cookieBanner.style.display = "none";
  messageDiv.textContent = "Cookies accepted and saved!";
});
