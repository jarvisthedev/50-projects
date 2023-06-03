const hiddenBox = document.querySelector(".hidden-box");
const attempt = document.querySelector(".attempt");
const btn = document.querySelector("button");
const userInput = document.querySelector(".user-number");
const headText = document.querySelector(".num-text");
const body = document.querySelector("body");

const randomNum = Math.round(Math.random(10) * 10);
let max_attempts = 3;

function helper_func(hiddenCont, msg, z_index, color) {
  hiddenBox.textContent = hiddenCont;
  headText.textContent = msg;
  body.style.backgroundColor = color;
  btn.style.backgroundColor = "inherit";
  userInput.style.backgroundColor = "inherit";
  btn.style.zIndex = z_index;
  userInput.style.zIndex = z_index;
}

btn.addEventListener("click", function () {
  userInputValue = Number(userInput.value);
  if (!userInput.value) {
    headText.textContent = "Please enter a valid number";
    return;
  }

  if (userInputValue < 0 || userInputValue > 10) {
    headText.textContent = "Please provide number within 1 & 10";
    return;
  }

  max_attempts -= 1;
  headText.textContent =
    userInputValue > randomNum ? "Number! Too high" : "Number! Too low";

  if (userInputValue === randomNum)
    helper_func(
      randomNum,
      "Congrats! You have won 🥳️🎉️ 🥳️🎉️ 🥳️🎉️",
      "-1",
      "blue"
    );
  else if (max_attempts === 0)
    helper_func(randomNum, "Loser! You have lost 😭️ 😭️ 😭️", "-1", "red");

  attempt.textContent = max_attempts;
});
