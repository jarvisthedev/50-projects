const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".img-list");

container.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;
  if (!clicked.classList.contains("img-list")) return;
  for (let i = 0; i < imgList.length; i++) {
    imgList[i].classList.remove("current-img");
  }
  clicked.classList.add("current-img");
});
