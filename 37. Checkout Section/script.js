`use strict`;

const sectioncheckout = document.querySelector('.section--checkout');

const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.watch-img');

sectioncheckout.addEventListener('click', function (e) {
  const clicked = e.target;
  if (clicked.classList.contains('dot')) {
    Array.from(dots).map(el => el.classList.remove('current-img'));
    Array.from(images).map(el => el.classList.add('hidden'));
    clicked.classList.add('current-img');
    for (let i = 0; i < dots.length; i++)
      if (dots[i].classList.contains('current-img'))
        images[i].classList.remove('hidden');
  }
});
