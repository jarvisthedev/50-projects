const hiddenBox = document.querySelector(".hidden-box");
const trials = document.querySelector(".trials");
const guessBtn = document.querySelector(".guess-btn");
const userInput = document.querySelector(".user-number");
const introText = document.querySelector(".num-text");
const body = document.querySelector("body");

const randomNum = Math.round(Math.random(10) * 10);

// console.log(randomNum);

let entries = 3;

guessBtn.addEventListener("click", function () {
  userInputValue = Number(userInput.value);
  entries -= 1;

  if (userInputValue > randomNum) introText.textContent = "Number! Too high";
  else if (userInputValue < randomNum)
    introText.textContent = "Number! Too low";

  if (userInputValue === randomNum) {
    hiddenBox.textContent = randomNum;
    introText.textContent = "Congrats! You have won 🥳️ 🥳️ 🥳️";
    body.style.backgroundColor = "blue";
    guessBtn.style.backgroundColor = "inherit";
    userInput.style.backgroundColor = "inherit";
    guessBtn.style.zIndex = "-1";
  } else {
    if (entries === 0) {
      hiddenBox.textContent = randomNum;
      introText.textContent = "Losser! You have Loser 😭️ 😭️ 😭️";
      body.style.backgroundColor = "red";
      guessBtn.style.backgroundColor = "inherit";
      userInput.style.backgroundColor = "inherit";
      guessBtn.style.border = "2px solid #000;";

      guessBtn.style.zIndex = "-1";
    }
  }
  trials.textContent = entries;
});
