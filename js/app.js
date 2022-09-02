const themeToggleButton = document.getElementById("dark-toggle");
let theme = localStorage.getItem("THEME") || "light";
theme === "light" ? setLightTheme() : setDarkTheme();

function setDarkTheme() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("THEME", "dark");
  theme = "dark";
  themeToggleButton.innerText = "Light Mode";
}

function setLightTheme() {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("THEME", "light");
  theme = "light";
  themeToggleButton.innerText = "Dark Mode";
}

themeToggleButton.addEventListener("click", () => {
  if (theme === "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});
