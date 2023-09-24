const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".img-list");
const dots = document.querySelectorAll(".dot-list");
const headText = document.querySelectorAll(".head-text");
const more = document.querySelectorAll(".more");

container.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;
  let curr = 0;

  if (!clicked.classList.contains("img-list")) return;
  for (let i = 0; i < imgList.length; i++) {
    imgList[i].classList.remove("current-img");
    dots[i].classList.remove("current-dot");
    headText[i].classList.add("no-display");
    more[i].classList.add("no-display");
  }

  clicked.classList.add("current-img");
  for (let i = 0; i < imgList.length; i++) {
    if (imgList[i].classList.contains("current-img")) curr = i;
  }

  dots[curr].classList.add("current-dot");
  headText[curr].classList.remove("no-display");
  more[curr].classList.remove("no-display");
});
