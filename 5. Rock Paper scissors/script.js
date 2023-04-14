const container = document.querySelector(".container");
const imgList = document.querySelectorAll(".imgs-list");
const imgOpp = document.querySelector(".tick");
const imgName = document.querySelectorAll(".img-name");
const score = document.querySelectorAll(".score");
const hiddenScore = document.querySelectorAll(".hidden-score");
const finalResult = document.querySelector(".final-result");
const playAgainBtn = document.querySelector(".play-again");

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
  addBtn_Replay();
  if (pos === 0) {
    playerScore += 1;
    score[pos].textContent = playerScore;
    hiddenScore[pos].textContent = playerScore;
    return playerScore;
  } else {
    opponentScore += 1;
    score[pos].textContent = opponentScore;
    hiddenScore[pos].textContent = opponentScore;
    return opponentScore;
  }
}

function addBtn_Replay() {
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

playAgainBtn.addEventListener("click", function () {
  finalResult.classList.add("hidden");
  reset();
  score[0].textContent = 0;
  score[1].textContent = 0;
  hiddenScore[0].textContent = 0;
  hiddenScore[1].textContent = 0;
});

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
  if (playerPick === opponentPick) addBtn_Replay();
  else if (playerPick === "rock" && opponentPick === "paper")
    opponentScore = comparePickedImages(1);
  else if (playerPick === "rock" && opponentPick === "scissors")
    playerScore = comparePickedImages(0);
  else if (playerPick === "paper" && opponentPick === "rock")
    playerScore = comparePickedImages(0);
  else if (playerPick === "paper" && opponentPick === "scissors")
    opponentScore = comparePickedImages(1);
  else if (playerPick === "scissors" && opponentPick === "rock")
    opponentScore = comparePickedImages(1);
  else if (playerPick === "scissors" && opponentPick === "paper")
    playerScore = comparePickedImages(0);

  //
  // 4. ANNOUNCE THE WINNER
  if (opponentScore === 3) {
    finalResult.classList.remove("hidden");
    document.querySelector(".outcome").textContent = "You lose...";
  } else if (playerScore === 3) {
    finalResult.classList.remove("hidden");
    document.querySelector(".outcome").textContent = "You win!";
  }

  //
  // 5. THE REPLAY BUTTON AND ITS FUNCTIONALITY
  document.querySelector(".replay").addEventListener("click", function (e) {
    reset();
    document.querySelector(".replay").remove();
  });
});
