'use strict';

const sectionImgslider = document.querySelector('.section--imageslider');
const imgHolder = document.querySelectorAll('.img_holder');
const currentImageNum = document.querySelector('.img-count');
const allImagesNum = document.querySelector('.all-imgs');

sectionImgslider.addEventListener('click', function (e) {
  const clicked = e.target;
  let arrLen = imgHolder.length;
  allImagesNum.contains = arrLen + 2;
  if (!clicked.classList.contains('ph-bold')) return;
  if (clicked.classList.contains('ph-caret-right')) {
    for (let i = 0; i < imgHolder.length; i++) {
      if (!imgHolder[i].classList.contains('hidden')) {
        imgHolder[i].classList.add('hidden');
        imgHolder[i + 1 >= imgHolder.length ? 0 : i + 1].classList.remove(
          'hidden'
        );
        break;
      }
    }
  }

  if (clicked.classList.contains('ph-caret-left')) {
    for (let i = 0; i < imgHolder.length; i++) {
      if (!imgHolder[i].classList.contains('hidden')) {
        imgHolder[i].classList.add('hidden');
        imgHolder[i - 1 < 0 ? imgHolder.length : i - 1].classList.remove(
          'hidden'
        );
        break;
      }
    }
  }
  //   if(clicked.classList.contains('ph-caret-left'))
});
