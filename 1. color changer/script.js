const colorBox = document.querySelector(".color");

function randomColor() {
  const randomNum = Math.floor(Math.random(256 - 0) * 256);

  return randomNum;
}

// console.log(randomColor(), randomColor(), randomColor());

// const color = `rgb(${randomNum}, ${randomNum}, ${randomNum})`;
// console.log(color);

setInterval(() => {
  colorBox.style.backgroundColor = `
  rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}, 1000);
