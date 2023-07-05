'use strict';

const sectionEditor = document.querySelector('.section--editor');
const img = document.querySelector('img');

const rotate_flip = function (ph) {};

sectionEditor.addEventListener('click', function (e) {
  let rotateLeft = 0;
  let rotateRight = 0;
  let flipRigth = -1;
  let flipBtm = -1;

  if (e.target.classList.contains('rotate--left')) {
    rotateLeft = rotateLeft + -90;
    img.style.transform = `rotate(${rotateLeft}deg)`;
  }

  if (e.target.classList.contains('rotate--right')) {
    rotateRight = rotateRight + 90;
    img.style.transform = `rotate(${rotateRight}deg)`;
  }

  if (e.target.classList.contains('flip--top')) {
    img.style.transform = `scaleX(${flipRigth})`;
    flipRigth = flipRigth === -1 ? 1 : -1;
  }

  if (e.target.classList.contains('flip--bottom')) {
    img.style.transform = `scaleY(${flipBtm})`;
    flipBtm = flipBtm === -1 ? 1 : -1;
  }
});
