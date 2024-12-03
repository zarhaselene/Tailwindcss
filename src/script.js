const themeIcon = document.getElementById("themeIcon");
const themeContainer = document.getElementById("themeContainer");
themeIcon.addEventListener("click", () => {
  themeContainer.classList.toggle("show");
  themeContainer.classList.toggle("hidden");
});

const miniMenuBtn = document.getElementById("miniMenuBtn");
const miniMenu = document.getElementById("miniMenu");
const overlay = document.getElementById("blurOverlay");

miniMenuBtn.addEventListener("click", () => {
  miniMenu.classList.remove("hidden");
  miniMenu.classList.add("show");
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
});

const closeBtn = document.getElementById("closeBtn");
const menuIcons = document.getElementById("menuIcons");
closeBtn.addEventListener("click", () => {
  miniMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});
