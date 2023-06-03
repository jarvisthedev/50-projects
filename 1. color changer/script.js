const colorBox = document.querySelector(".color");

function randomNum() {
  return Math.floor(Math.random(256 - 0) * 256);
}

function colorChange() {
  colorBox.style.backgroundColor = `
  rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

colorChange();
setInterval(() => {
  colorChange();
}, 1000);
