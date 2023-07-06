'use strict';

const sectionEditor = document.querySelector('.section--editor');

const img = document.querySelector('img');
const fileInput = document.querySelector('.file-input'),
  previewImg = document.querySelector('.img-holder img'),
  chooseImgBtn = document.querySelector('.btn--chose');

const loadImage = () => {
  let file = fileInput.files[0];
  if (!file) return;
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener(`load`, () => {
    document.querySelector('.container').classList.remove('disable');
  });
};

fileInput.addEventListener('change', loadImage);
chooseImgBtn.addEventListener('click', () => fileInput.click());

const btn_rotate_left = document.querySelector(`.rotate--left`);
const btn_rotate_right = document.querySelector(`.rotate--right`);
const btn_flip_left = document.querySelector(`.flip--left`);
const btn_flip_btm = document.querySelector(`.flip--bottom`);
const btnReset = document.querySelector(`.btn--reset`);

const filterBtns = document.querySelectorAll('.btn-controls .btn');
const filterText = document.querySelector('.label-control .text');
const filterPecentage = document.querySelector('.label-control .percentage');
const filterRange = document.querySelector('.control');

let brightness = 100,
  saturation = 100,
  inversion = 0,
  grayscale = 0;

let rotate = 0,
  flipRigth = -1,
  flipBtm = -1;

const rotateAndFlipImg = function (ph) {
  if (ph === btn_rotate_left) {
    rotate = rotate + -90;
    img.style.transform = `rotate(${rotate}deg)`;
  }

  if (ph === btn_rotate_right) {
    rotate = rotate + 90;
    img.style.transform = `rotate(${rotate}deg)`;
  }

  if (ph === btn_flip_left) {
    img.style.transform = `scaleX(${flipRigth})`;
    flipRigth = flipRigth === -1 ? 1 : -1;
  }

  if (ph === btn_flip_btm) {
    img.style.transform = `scaleY(${flipBtm})`;
    flipBtm = flipBtm === -1 ? 1 : -1;
  }
};

const filterEffects = function (el) {
  if (!el.classList.contains('filter')) return;
  Array.from(filterBtns).map(btn => btn.classList.remove('active'));
  el.classList.add('active');
  filterText.textContent = el.textContent;
  if (el.classList.contains('btn--brightness')) {
    filterRange.value = brightness;
    filterPecentage.textContent = `${brightness}%`;
  } else if (el.classList.contains('btn--saturation')) {
    filterRange.value = saturation;
    filterPecentage.textContent = `${saturation}%`;
  } else if (el.classList.contains('btn--inversion')) {
    filterRange.value = inversion;
    filterPecentage.textContent = `${inversion}%`;
  } else if (el.classList.contains('btn--grayscale')) {
    filterRange.value = grayscale;
    filterPecentage.textContent = `${grayscale}%`;
  }
};

const applyfilter = function () {
  img.style.filter = ` brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
};

const resettingImg = function (el) {
  if (el !== btnReset) return;
  (brightness = 100), (saturation = 100), (inversion = 0), (grayscale = 0);
  applyfilter();
};

filterRange.addEventListener('change', () => {
  filterPecentage.textContent = `${filterRange.value}%`;

  if (filterText.textContent === 'Brightness') brightness = filterRange.value;
  else if (filterText.textContent === 'Saturation')
    saturation = filterRange.value;
  else if (filterText.textContent === 'Inversion')
    inversion = filterRange.value;
  else if (filterText.textContent === 'Grayscale')
    grayscale = filterRange.value;

  applyfilter();
});

sectionEditor.addEventListener('click', function (e) {
  rotateAndFlipImg(e.target);
  filterEffects(e.target);
  resettingImg(e.target);
});
