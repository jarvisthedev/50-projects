const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".imgs-list");
const imgOpp = document.querySelector(".tick");
const imgName = document.querySelectorAll(".img-name");

container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("img-detail")) return;
  const clicked = e.target;
  if (clicked.closest(".field--2")) return;

  if (clicked.classList.contains("rock")) {
    imgList[0].innerHTML = `<li> <img class="img-detail rock" src="images/img0.png" alt="Rock image" /> </li>`;
    imgName[0].textContent = "ROCK";
  } else if (clicked.classList.contains("paper")) {
    imgList[0].innerHTML = `<li><img class="img-detail paper" src="images/img1.png" alt="Paper image" /></li>`;
    imgName[0].textContent = "PAPER";
  } else if (clicked.classList.contains("scissors")) {
    imgList[0].innerHTML = ` <li> <img class="img-detail scissors" src="images/img2.png" alt="Scissors image" /> </li>`;
    imgName[0].textContent = "SCISSORS";
  }

  const random = Math.floor(Math.random() * 3);
  imgOpp.src = `images/img${random}.png`;
  if (random === 0) imgName[1].textContent = "ROCK";
  else if (random === 1) imgName[1].textContent = "PAPER";
  else if (random === 2) imgName[1].textContent = "SCISSORS";
});
