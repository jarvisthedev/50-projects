const header = document.querySelector(".header");
const navDetail = document.querySelectorAll(".nav-detail");
const moreText = document.querySelectorAll(".more-text");

header.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked) {
    console.log(clicked);
    if (clicked.classList.contains("nav-detail")) {
      console.log(clicked);
    }
  }
});
