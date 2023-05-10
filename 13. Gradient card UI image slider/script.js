const container = document.querySelector(".container");
const cardImg = document.querySelectorAll(".card-img");
const moreInfo = document.querySelectorAll(".more-info");
// const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  console.log(11111);
  let active = cardImg[0];
  for (let i = 0; i < cardImg.length; i++) {
    if (!cardImg[i].classList.contains("hidden")) {
      console.log(i, cardImg[i]);
      cardImg[i].classList.add("hidden");
      moreInfo[i].classList.add("hidden");

      active = i + 1;
      console.log(active);
    }
    console.log(23323333);
  }

  moreInfo[active].classList.remove("hidden");
  active - 1;
  cardImg[active].classList.remove("hidden");
});

console.log(cardImg);
