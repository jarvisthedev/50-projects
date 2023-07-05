'use strict';

const sectionEditor = document.querySelector('.section--editor');
const img = document.querySelector('img');

const rotate_left = document.querySelector(`.rotate--left`);
const rotate_right = document.querySelector(`.rotate--right`);
const flip_left = document.querySelector(`.flip--left`);
const flip_btm = document.querySelector(`.flip--bottom`);

let rotateLeft = 0;
let rotateRight = 0;
let flipRigth = -1;
let flipBtm = -1;

const rotateAndFlipFunctionHandler = function (event) {
  if (event === rotate_left) {
    rotateLeft = rotateLeft + -90;
    img.style.transform = `rotate(${rotateLeft}deg)`;
  }

  if (event === rotate_right) {
    rotateRight = rotateRight + 90;
    img.style.transform = `rotate(${rotateRight}deg)`;
  }

  if (event === flip_left) {
    img.style.transform = `scaleX(${flipRigth})`;
    flipRigth = flipRigth === -1 ? 1 : -1;
  }

  if (event === flip_btm) {
    img.style.transform = `scaleY(${flipBtm})`;
    flipBtm = flipBtm === -1 ? 1 : -1;
  }
};

sectionEditor.addEventListener('click', function (e) {
  rotateAndFlipFunctionHandler(e.target);
});
