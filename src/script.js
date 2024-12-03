const themeIcon = document.getElementById("themeIcon");
const themeContainer = document.getElementById("themeContainer");

//on click of theme icon, show the theme container with toggle: remove hidden class and and add show class
themeIcon.addEventListener("click", () => {
  themeContainer.classList.toggle("show");
  themeContainer.classList.toggle("hidden");
});
