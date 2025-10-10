const profileForm = document.getElementById("profileForm");
const submitBtn = document.querySelector(".submit-btn");
const success = document.querySelector(".success");

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const name = nameInput.value;
  const email = emailInput.value;
  const profile = { name, email };

  localStorage.setItem("profile", JSON.stringify(profile));
  console.log("Info saved");
  success.textContent = "Success!";

  nameInput.value = "";
  emailInput.value = "";
});

window.addEventListener("load", () => {
  const savedProfile = localStorage.getItem("profile");
  if (savedProfile) {
    const parsedProfile = JSON.parse(savedProfile);
    console.log("Saved profile found", parsedProfile);
  }
});
