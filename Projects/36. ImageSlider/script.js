'use strict';

const sectionImgslider = document.querySelector('.section--imageslider');
const imgHolder = document.querySelectorAll('.img_holder');
const visibleImgNum = document.querySelector('.img-count');
const allImages = document.querySelector('.all-imgs');

function imgFliptHelper(el, direction) {
  const totalImg = imgHolder.length;
  let visibleImg = 0;

  if (el.classList.contains(direction)) {
    for (let i = 0; i < totalImg; i++) {
      if (direction === 'ph-caret-right')
        visibleImg = i + 1 >= totalImg ? 0 : i + 1;
      if (direction === 'ph-caret-left')
        visibleImg = i - 1 < 0 ? totalImg - 1 : i - 1;

      if (!imgHolder[i].classList.contains('hidden')) {
        imgHolder[i].classList.add('hidden');
        imgHolder[visibleImg].classList.remove('hidden');

        allImages.textContent = totalImg;
        visibleImgNum.textContent = visibleImg + 1;
        break;
      }
    }
  }
}

sectionImgslider.addEventListener('click', function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains('ph-bold')) return;

  imgFliptHelper(clicked, 'ph-caret-left');
  imgFliptHelper(clicked, 'ph-caret-right');
});
