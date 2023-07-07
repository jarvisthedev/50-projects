`use strict`;

const btns = document.querySelector('.menu-btns');
const btn__menu = document.querySelector('.btn--menu');
const btn__close = document.querySelector('.btn--close');

const navLinks = document.querySelector('.nav');
const moreLinks = document.querySelector('.more');
const searchBar = document.querySelector('.search-bar');

// API KEY ::: 63432cefe97c4243aa0265dec448be69

const API_KEY = `63432cefe97c4243aa0265dec448be69`;

let state = 'flex';
let checkMoreState = 'flex';

const menuControlHelper = () => {
  moreLinks.style.display = `${state}`;
  searchBar.style.display = `${state}`;
  navLinks.style.display = `${state}`;
  state = state === 'none' ? 'flex' : 'none';
  if (state === `none`) {
    btn__close.style.display = `block`;
    btn__menu.style.display = `none`;
  } else {
    btn__close.style.display = `none`;
    btn__menu.style.display = `block`;
  }
};

btns.addEventListener('click', menuControlHelper);
navLinks.addEventListener('click', function (e) {
  if (e.target.classList.contains('ph')) {
    searchBar.style.display = `${checkMoreState}`;
    moreLinks.style.display = `none`;
  } else if (
    !e.target.classList.contains('ph') &&
    e.target.classList.contains('links-disappear')
  ) {
    moreLinks.style.display = `${checkMoreState}`;
    searchBar.style.display = `none`;
  }
  checkMoreState = checkMoreState === 'none' ? 'flex' : 'none';
});
