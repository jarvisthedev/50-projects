const hiddenBox = document.querySelector(".hidden-box");
const trials = document.querySelector(".trials");
const guessBtn = document.querySelector(".guess-btn");
const userInput = document.querySelector(".user-number");
const introText = document.querySelector(".num-text");
const body = document.querySelector("body");

const randomNum = Math.round(Math.random(10) * 10);

let entries = 3;

function helper_func(hiddenCont, msg, z_index, color) {
  hiddenBox.textContent = hiddenCont;
  introText.textContent = msg;
  body.style.backgroundColor = color;
  guessBtn.style.backgroundColor = "inherit";
  userInput.style.backgroundColor = "inherit";
  guessBtn.style.zIndex = z_index;
  userInput.style.zIndex = z_index;
}

guessBtn.addEventListener("click", function () {
  userInputValue = Number(userInput.value);
  if (!userInput.value) {
    introText.textContent = "Please enter a valid number";
    return;
  }

  if (userInputValue < 0 || userInputValue > 10) {
    introText.textContent = "Please provide number within 1 & 10";
    return;
  }

  entries -= 1;
  if (userInputValue > randomNum) introText.textContent = "Number! Too high";
  else if (userInputValue < randomNum)
    introText.textContent = "Number! Too low";

  if (userInputValue === randomNum) {
    helper_func(
      randomNum,
      "Congrats! You have won 🥳️🎉️ 🥳️🎉️ 🥳️🎉️",
      "-1",
      "blue"
    );
  } else {
    if (entries === 0)
      helper_func(randomNum, "Losser! You have Loser 😭️ 😭️ 😭️", "-1", "red");
  }
  trials.textContent = entries;
});
