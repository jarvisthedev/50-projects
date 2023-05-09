const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".img-list");
const dots = document.querySelectorAll(".dot-list");

container.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;
  let curr = 0;

  if (!clicked.classList.contains("img-list")) return;
  for (let i = 0; i < imgList.length; i++) {
    imgList[i].classList.remove("current-img");
    dots[i].classList.remove("current-dot");
  }

  clicked.classList.add("current-img");
  for (let i = 0; i < imgList.length; i++) {
    if (imgList[i].classList.contains("current-img")) curr = i;
  }
  dots[curr].classList.add("current-dot");
});
