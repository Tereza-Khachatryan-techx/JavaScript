const submitBtn = document.querySelector(".submit-btn");
const textarea = document.querySelector(".user-note");
const success = document.querySelector(".success");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const textareaValue = textarea.value.trim();
  const savedNote = sessionStorage.getItem("note");
  const savedText = savedNote ? JSON.parse(savedNote) : "";

  if (textareaValue && textareaValue !== savedText) {
    sessionStorage.setItem("note", JSON.stringify(textareaValue));
    console.log("Note saved");
    success.textContent = "Success!";
  } else if (!textareaValue) {
    success.textContent = "Please enter a note!";
  } else {
    success.textContent = "No changes to save.";
  }
});

window.addEventListener("load", () => {
  const savedNote = sessionStorage.getItem("note");
  if (savedNote) {
    textarea.value = JSON.parse(savedNote);
    console.log("Note loaded from session storage");
  }
});
