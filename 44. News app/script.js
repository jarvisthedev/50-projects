`use strict`;

const header = document.querySelector('.header');
const newsContainer = document.querySelector('.section--hero .container');
const btns = document.querySelector('.menu-btns');
const btn__menu = document.querySelector('.btn--menu');
const btn__close = document.querySelector('.btn--close');
const btn__Search = document.querySelector('.btn--search');
const searchInput = document.querySelector('.search-news');

const navLinks = document.querySelector('.nav');
const moreLinks = document.querySelector('.more');
const searchBar = document.querySelector('.search-bar');

let state = 'flex';
let checkMoreState = 'flex';

const API_KEY = `63432cefe97c4243aa0265dec448be69`;
const URL = `https://newsapi.org/v2/everything?q=`;

// //////////////////
//  PROJECT UI CONTROL
// //////////////////
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

// //////////////////
//  PROJECT API RENDERS
// //////////////////
const newsCardRender = function (articleData) {
  const image =
    articleData?.urlToImage &&
    `<img src="${articleData.urlToImage}" alt="Failed to load image please reload" />`;

  const dateObj = new Date(articleData.publishedAt);
  const dateFormat = `${dateObj.getDate().toString().padStart(2, '0')}/${(
    dateObj.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${dateObj.getFullYear()} ${dateObj
    .getHours()
    .toString()
    .padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;

  let dataDescription = articleData.content;
  dataDescription = dataDescription.replace(/\s*\[\+\d+ chars\]/g, '');

  const html = `
    <div class="news-card">
    <a class="more-info" target="_blank" href="${articleData.url}"> 
      <div
        role="img"
        aria-label="news-card image holder"
        class="img-holder"
      >
        ${image === null ? `` : image}
      </div>
      <h2 class="secondary-text">
        ${articleData.title}
      </h2>
      <p class="date"> <b class="sourceName">${
        articleData.source.name
      }</b>  ${dateFormat}</p>
      <article class="blockquote">
         ${dataDescription}
      </article>
      </a>
    </div>
    `;

  newsContainer.insertAdjacentHTML('afterbegin', html);
};

async function fetchNews(query) {
  const res = await fetch(`${URL}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  newsContainer.innerHTML = '';

  data.articles.forEach(card => newsCardRender(card));
}

header.addEventListener('click', function (e) {
  const clicked = e.target;
  if (
    clicked.classList.contains('nav-detail') &&
    !clicked.classList.contains('links-disappear')
  ) {
    moreLinks.style.display = `none`;
    searchBar.style.display = `none`;
    window.addEventListener('load', fetchNews(`${clicked.textContent}`));
  }
});

btn__Search.addEventListener('click', function (e) {
  if (!searchInput.value) return;
  window.addEventListener('load', fetchNews(`${searchInput.value}`));
  moreLinks.style.display = `none`;
  searchBar.style.display = `none`;
  searchInput.value = '';
});

window.addEventListener('load', fetchNews('world'));
