const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".imgs-list");
const imgOpp = document.querySelector(".tick");
const imgName = document.querySelectorAll(".img-name");
const score = document.querySelectorAll(".score");
const hiddenScore = document.querySelectorAll(".hidden-score");
const finalResult = document.querySelector(".final-result");

function reRender() {
  imgList[0].innerHTML = `
  <li><img class="img-detail rock" src="images/img0.png" alt="Rock image"/></li>
  <li><img class="img-detail paper" src="images/img1.png" alt="Paper image" /></li>
  <li><img class="img-detail scissors" src="images/img2.png" alt="Scissors image" /></li>`;

  imgList[1].innerHTML = `
  <li><img class="img-detail tick" src="images/img3.png" alt="Tick image placeholder"  /></li>`;

  imgName[0].textContent = "";
  imgName[1].textContent = "";
}

function addButton() {
  container.insertAdjacentHTML(
    "beforebegin",
    `<button class="replay">Replay</button>`
  );
}

let playerScore = 0;
let opponentScore = 0;

container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("img-detail")) return;

  const clicked = e.target;
  if (clicked.closest(".field--2")) return;

  let opponentPick = "";
  let playerPick = "";

  const parentField = imgName[0].closest(".field--1");

  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    imgList[1].innerHTML = `<li> <img class="img-detail rock" src="images/img0.png" alt="Rock image" /> </li>`;
    imgName[1].textContent = "ROCK";
    opponentPick = "rock";
  } else if (random === 1) {
    imgList[1].innerHTML = `<li><img class="img-detail paper" src="images/img1.png" alt="Paper image" /></li>`;
    imgName[1].textContent = "PAPER";
    opponentPick = "paper";
  } else if (random === 2) {
    imgList[1].innerHTML = `<li> <img class="img-detail scissors" src="images/img2.png" alt="Scissors image" /> </li>`;
    imgName[1].textContent = "SCISSORS";
    opponentPick = "scissors";
  }

  if (clicked.classList.contains("rock")) {
    imgList[0].innerHTML = `<li> <img class="img-detail rock" src="images/img0.png" alt="Rock image" /> </li>`;
    imgName[0].textContent = "ROCK";
    playerPick = "rock";
  } else if (clicked.classList.contains("paper")) {
    imgList[0].innerHTML = `<li><img class="img-detail paper" src="images/img1.png" alt="Paper image" /></li>`;
    imgName[0].textContent = "PAPER";
    playerPick = "paper";
  } else if (clicked.classList.contains("scissors")) {
    imgList[0].innerHTML = `<li> <img class="img-detail scissors" src="images/img2.png" alt="Scissors image" /> </li>`;
    imgName[0].textContent = "SCISSORS";
    playerPick = "scissors";
  }

  if (playerPick === opponentPick) {
    addButton();
  } else if (playerPick === "rock" && opponentPick === "paper") {
    opponentScore += 1;
    score[1].textContent = opponentScore;
    hiddenScore[1].textContent = opponentScore;
    addButton();
  } else if (playerPick === "rock" && opponentPick === "scissors") {
    playerScore += 1;
    score[0].textContent = playerScore;
    hiddenScore[0].textContent = playerScore;

    addButton();
  } else if (playerPick === "paper" && opponentPick === "rock") {
    playerScore += 1;
    score[0].textContent = playerScore;
    hiddenScore[0].textContent = playerScore;

    addButton();
  } else if (playerPick === "paper" && opponentPick === "scissors") {
    opponentScore += 1;
    score[1].textContent = opponentScore;
    hiddenScore[1].textContent = opponentScore;

    addButton();
  } else if (playerPick === "scissors" && opponentPick === "rock") {
    opponentScore += 1;
    score[1].textContent = opponentScore;
    hiddenScore[1].textContent = opponentScore;

    addButton();
  } else if (playerPick === "scissors" && opponentPick === "paper") {
    playerScore += 1;
    score[0].textContent = playerScore;
    hiddenScore[0].textContent = playerScore;

    addButton();
  }

  // Re-render the whole thing
  document.querySelector(".replay").addEventListener("click", function (e) {
    reRender();
    document.querySelector(".replay").remove();
  });

  // IF EITHER OF SCORE CONFIRM THE WINNER
  if (opponentScore === 3) {
    finalResult.classList.remove("hidden");
    document.querySelector(".outcome").textContent = "Opps! You just lost";
  } else if (playerScore === 3) {
    finalResult.classList.remove("hidden");
    document.querySelector(".outcome").textContent = "Congrats! You won";
  }
});
