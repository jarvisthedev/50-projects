// console.log("b;");
const colorBox = document.querySelector(".color");

function randomNum(num1, num2) {
  return Math.floor(Math.random(num2 - num1) * num2);
}

setInterval(() => {
  colorBox.style.backgroundColor = `
  rgb(${randomNum(0, 256)}, ${randomNum(0, 256)}, ${randomNum(0, 256)})`;
}, 1000);
