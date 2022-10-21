const htmlDocument = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonSm = document.querySelector("#toggle-sm");

toggleButton.addEventListener("click", () => toggleDarkMode());
toggleButtonSm.addEventListener("click", () => toggleDarkMode());

const toggleDarkMode = () => {
  htmlDocument.classList.contains("dark")
    ? htmlDocument.classList.remove("dark")
    : htmlDocument.classList.add("dark");
};
