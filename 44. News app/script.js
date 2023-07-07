`use strict`;

const menuBtn = document.querySelector('.btn--menu');
const closeBtn = document.querySelector('.btn--close');
const moreLinks = document.querySelector('.more');
const searchBar = document.querySelector('.search-bar');
const navLinks = document.querySelector('.nav');

let state = 'flex';
const menuControlHelper = function () {
  moreLinks.style.display = `${state}`;
  searchBar.style.display = `${state}`;
  navLinks.style.display = `${state}`;
  state = state === 'none' ? 'flex' : 'none';
  if (state === `none`) {
    closeBtn.style.display = `block`;
    menuBtn.style.display = `none`;
  } else {
    closeBtn.style.display = `none`;
    menuBtn.style.display = `block`;
  }
};

menuBtn.addEventListener('click', menuControlHelper);
closeBtn.addEventListener('click', menuControlHelper);
