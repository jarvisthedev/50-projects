const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".imgs-list");
const imgOpp = document.querySelector(".tick");
const imgName = document.querySelectorAll(".img-name");
const score = document.querySelectorAll(".score");
const hiddenScore = document.querySelectorAll(".hidden-score");
const finalResult = document.querySelector(".final-result");

let playerScore = 0;
let opponentScore = 0;

function reset() {
  imgList[0].innerHTML = `
  <li><img class="img-detail rock" src="images/img0.png" alt="Rock image"/></li>
  <li><img class="img-detail paper" src="images/img1.png" alt="Paper image" /></li>
  <li><img class="img-detail scissors" src="images/img2.png" alt="Scissors image" /></li>`;

  imgList[1].innerHTML = `
  <li><img class="img-detail tick" src="images/img3.png" alt="Tick image placeholder"  /></li>`;

  imgName[0].textContent = "";
  imgName[1].textContent = "";
}

function comparePickedImages(pos) {
  // } else if (playerPick === "rock" && opponentPick === "paper") {
  opponentScore += 1;
  score[pos].textContent = opponentScore;
  hiddenScore[pos].textContent = opponentScore;
  addButton();

  // } else if (playerPick === "rock" && opponentPick === "scissors") {
  playerScore += 1;
  score[0].textContent = playerScore;
  hiddenScore[0].textContent = playerScore;
  addButton();
}

function addButton() {
  container.insertAdjacentHTML(
    "beforebegin",
    `<button class="replay">Replay</button>`
  );
}

// Image Picked It's Name
function imgName_and_Picture(pos, innerContent, name) {
  imgList[pos].innerHTML = innerContent;
  imgName[pos].textContent = name;
  imgPickedName = name.toLowerCase();
  return imgPickedName;
}

container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("img-detail")) return;

  const clicked = e.target;
  if (clicked.closest(".field--2")) return;

  const random = Math.floor(Math.random() * 3);
  let opponentPick = "";
  let playerPick = "";

  //
  // 1. RANDOM IMG PICKED WITH ITS NAME
  if (random === 0)
    opponentPick = imgName_and_Picture(
      1,
      `<li> <img class="img-detail rock" src="images/img0.png" alt="Rock image" /></li>`,
      "ROCK"
    );
  else if (random === 1)
    opponentPick = imgName_and_Picture(
      1,
      `<li><img class="img-detail paper" src="images/img1.png" alt="Paper image" /></li>`,
      "PAPER"
    );
  else if (random === 2)
    opponentPick = imgName_and_Picture(
      1,
      `<li> <img class="img-detail scissors" src="images/img2.png" alt="Scissors image" /></li>`,
      "SCISSORS"
    );

  //
  // 2. IMAGE PICKED BY PLAYER FROM PLAYER'S SIDE
  if (clicked.classList.contains("rock"))
    playerPick = imgName_and_Picture(
      0,
      `<li> <img class="img-detail rock" src="images/img0.png" alt="Rock image" /></li>`,
      "ROCK"
    );
  else if (clicked.classList.contains("paper"))
    playerPick = imgName_and_Picture(
      0,
      `<li><img class="img-detail paper" src="images/img1.png" alt="Paper image" /></li>`,
      "PAPER"
    );
  else if (clicked.classList.contains("scissors"))
    playerPick = imgName_and_Picture(
      0,
      `<li> <img class="img-detail scissors" src="images/img2.png" alt="Scissors image" /></li>`,
      "SCISSORS"
    );

  //
  // 3. COMPARING IMAGES PICKED WITH THEIR NAMES
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
    reset();
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
