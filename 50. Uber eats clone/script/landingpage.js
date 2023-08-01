const menu_bar = document.querySelector(".bx-menu");
const overlay = document.querySelector(".blur");
const hidden_menu = document.querySelector(".mini-menu");

menu_bar.addEventListener("click", function () {
  hidden_menu.classList.remove("hidden");
  overlay.classList.add("overlay");
});

overlay.addEventListener("click", function () {
  overlay.classList.remove("overlay");
  hidden_menu.classList.add("hidden");
});
