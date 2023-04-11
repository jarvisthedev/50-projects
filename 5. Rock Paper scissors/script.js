const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".imgs-list");
const imgOpp = document.querySelector(".tick");
const imgName = document.querySelectorAll(".img-name");
const score = document.querySelectorAll(".score");

let score_player = 0;
let score_opponent = 0;

container.addEventListener("click", function (e) {
  let opponentPick = "";
  let playerPick = "";
  if (!e.target.classList.contains("img-detail")) return;
  const clicked = e.target;
  if (clicked.closest(".field--2")) return;

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

  const random = Math.floor(Math.random() * 3);
  imgOpp.src = `images/img${random}.png`;
  if (random === 0) {
    imgName[1].textContent = "ROCK";
    opponentPick = "rock";
  } else if (random === 1) {
    imgName[1].textContent = "PAPER";
    opponentPick = "paper";
  } else if (random === 2) {
    imgName[1].textContent = "SCISSORS";
    opponentPick = "scissors";
  }

  // rock-rock -> draw
  // rock-paper -> lose
  // rock-scissors -> win

  if (playerPick === opponentPick) {
  } else if (playerPick === "rock" && opponentPick === "paper") {
    score_opponent += 1;
    score[1].textContent = score_opponent;
  } else if (playerPick === "rock" && opponentPick === "scissors") {
    score_player += 1;
    score[0].textContent = score_player;
  }
  // paper-rock -> win
  // paper-paper -> draw
  // paper-scissors -> lose
  else if (playerPick === "paper" && opponentPick === "rock") {
    score_player += 1;
    score[0].textContent = score_player;
  } else if (playerPick === "paper" && opponentPick === "scissors") {
    score_opponent += 1;
    score[1].textContent = score_opponent;
  }
  // scissors-rock -> lose
  // scissors-paper -> win
  // scissors-scissors -> draw
  else if (playerPick === "scissors" && opponentPick === "rock") {
    score_opponent += 1;
    score[1].textContent = score_opponent;
  } else if (playerPick === "scissors" && opponentPick === "paper") {
    score_player += 1;
    score[0].textContent = score_player;
  }

  // IF EITHER OF SCORE CONFIRM THE WINNER
  if (score_opponent === 3) {
    ("You lost the game");
    ("Refresh to start again");
  }
});
