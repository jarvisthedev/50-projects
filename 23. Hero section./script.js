const header = document.querySelector(".header");
const navDetail = document.querySelectorAll(".nav-detail");
const moreText = document.querySelectorAll(".more-text");

// Define the dynamic image URL
let dynamicImageUrl = "./imgs/see-life.jpg";
let gradient =
  "linear-gradient(to right bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))";

header.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;
  if (clicked) {
    console.log(clicked);
    if (clicked.classList.contains("nav-detail")) {
      //     background-image: linear-gradient(
      //   to right bottom,
      //   rgba(0, 0, 0, 0.35),
      //   rgba(0, 0, 0, 0.35)
      // ),
      // url("./imgs/see-life.jpg");

      if (clicked.classList.contains("sea")) {
        dynamicImageUrl = "./imgs/see-life.jpg";
      } else if (clicked.classList.contains("forest")) {
        dynamicImageUrl = "./imgs/forest-dark.jpg";
      } else if (clicked.classList.contains("skiing")) {
        dynamicImageUrl = "./imgs/skiing.jpg";
      } else if (clicked.classList.contains("biking")) {
        dynamicImageUrl = "./imgs/biking.jpg";
      } else if (clicked.classList.contains("golfing")) {
        dynamicImageUrl = "./imgs/golf1.jpg";
      }
    }
    header.style.backgroundImage = `${gradient}, url("${dynamicImageUrl}")`;
  }
});
