'use strict';

const sectionEditor = document.querySelector('.section--editor');
const fileInput = document.querySelector('.file-input');
const img = document.querySelector('img');

const btn_rotate_left = document.querySelector(`.rotate--left`);
const btn_rotate_right = document.querySelector(`.rotate--right`);
const btn_flip_left = document.querySelector(`.flip--left`);
const btn_flip_btm = document.querySelector(`.flip--bottom`);

const btnReset = document.querySelector(`.btn--reset`);
const btnSave = document.querySelector(`.btn--save`);
const btnChoose = document.querySelector('.btn--chose');

const filterBtns = document.querySelectorAll('.btn-controls .btn');
const filterText = document.querySelector('.label-control .text');
const filterPecentage = document.querySelector('.label-control .percentage');
const filterRange = document.querySelector('.control');

let brightness = 100;
let saturation = 100;
let inversion = 0;
let grayscale = 0;

let rotate = 0;
let flipRigth = -1;
let flipBtm = -1;

const filterEffects = function (el) {
  if (!el.classList.contains('filter')) return;
  Array.from(filterBtns).map(btn => btn.classList.remove('active'));
  el.classList.add('active');
  filterText.textContent = el.textContent;
  if (el.classList.contains('btn--brightness')) {
    filterRange.max = `200`;
    filterRange.value = brightness;
    filterPecentage.textContent = `${brightness}%`;
  } else if (el.classList.contains('btn--saturation')) {
    filterRange.max = `200`;
    filterRange.value = saturation;
    filterPecentage.textContent = `${saturation}%`;
  } else if (el.classList.contains('btn--inversion')) {
    filterRange.max = `100`;
    filterRange.value = inversion;
    filterPecentage.textContent = `${inversion}%`;
  } else if (el.classList.contains('btn--grayscale')) {
    filterRange.max = `100`;
    filterRange.value = grayscale;
    filterPecentage.textContent = `${grayscale}%`;
  }
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

const applyfilter = function () {
  img.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
};

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

const resettingImg = function (el) {
  if (el !== btnReset) return;
  brightness = 100;
  saturation = 100;
  inversion = 0;
  grayscale = 0;
  applyfilter();
};

const loadImage = function () {
  let file = fileInput.files[0];
  if (!file) return;
  img.src = URL.createObjectURL(file);
  img.addEventListener(`load`, () => {
    document.querySelector('.container').classList.remove('disable');
  });

  brightness = 100;
  saturation = 100;
  inversion = 0;
  grayscale = 0;
  applyfilter();
};

btnChoose.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', loadImage);

const saveImage = el => {
  if (el !== btnSave) return;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  if (rotate !== 0) ctx.rotate((rotate * Math.PI) / 180);

  ctx.scale(flipRigth, flipBtm);
  ctx.drawImage(
    img,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );

  const link = document.createElement(`a`);
  link.download = 'image.jpg';
  link.href = canvas.toDataURL();
  link.click();
};

sectionEditor.addEventListener('click', function (e) {
  filterEffects(e.target);
  rotateAndFlipImg(e.target);
  resettingImg(e.target);
  saveImage(e.target);
});
