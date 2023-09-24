const container = document.querySelector(".container");
const cardImg = document.querySelectorAll(".card-img");
const moreInfo = document.querySelectorAll(".more-info");
const dotDetail = document.querySelectorAll(".dot-detail");

container.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("btn")) return;
  let active = cardImg[0];
  for (let i = 0; i < cardImg.length; i++) {
    if (!cardImg[i].classList.contains("hidden")) {
      cardImg[i].classList.add("hidden");
      moreInfo[i].classList.add("hidden");
      dotDetail[i].classList.remove("current-dot");

      active = i + 1;
      if (active === 3) active = 0;
    }
  }

  moreInfo[active].classList.remove("hidden");
  cardImg[active].classList.remove("hidden");
  dotDetail[active].classList.add("current-dot");
});
