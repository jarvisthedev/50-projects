const container = document.querySelector(".container");
const pageDots = document.querySelector(".page-dots");
const dots = document.querySelector(".dots");
const icons = document.querySelectorAll(".icon");
const pagesList = document.querySelector(".pages-list");
const dotList = document.querySelector(".dots-list");
const pageDetails = document.querySelectorAll(".page-detail");

container.addEventListener("click", function (e) {
  const clicked = e.target;

  if (clicked.classList.contains("page-dots")) {
    dots.classList.toggle("hidden");
  }

  if (clicked === icons[0]) {
    console.log(11111);
    for (let i = 0; i < pageDetails.length; i++) {
      console.log(pageDetails[i]);
    }
  }

  if (clicked === icons[1]) {
    console.log(33333);
  }
});

console.log(pageDetails);
