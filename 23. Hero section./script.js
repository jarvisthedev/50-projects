const header = document.querySelector(".header");
const moreText = document.querySelector(".more-text");
const navDetail = document.querySelectorAll(".nav-detail");

let dynamicImageUrl = "./imgs/see-life.jpg";
let gradient =
  "linear-gradient(to right bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))";

header.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;
  if (clicked.classList.contains("nav-detail")) {
    if (clicked.classList.contains("sea")) {
      dynamicImageUrl = "./imgs/see-life.jpg";
      moreText.textContent = "Sea Life";
    } else if (clicked.classList.contains("forest")) {
      dynamicImageUrl = "./imgs/forest-dark.jpg";
      moreText.textContent = "Forest Life";
    } else if (clicked.classList.contains("skiing")) {
      dynamicImageUrl = "./imgs/skiing1.jpg";
      moreText.textContent = "Skiing";
    } else if (clicked.classList.contains("biking")) {
      dynamicImageUrl = "./imgs/biking.jpg";
      moreText.textContent = "Biking";
    } else if (clicked.classList.contains("golfing")) {
      dynamicImageUrl = "./imgs/golf1.jpg";
      moreText.textContent = "Golfing";
    }
  }
  header.style.backgroundImage = `${gradient}, url("${dynamicImageUrl}")`;
});

console.log(moreText.textContent);
