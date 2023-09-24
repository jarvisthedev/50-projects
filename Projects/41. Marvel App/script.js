'use strict';

const sectionMarvel = document.querySelector('.section--marvel');
const input = document.querySelector('.input-text');
const searchBtn = document.querySelector('.search-btn');
const marvelContainerInfo = document.querySelector('.marvel-info');
const listContainer = document.querySelector('.list-container');

const date = new Date();
const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

const getResult = async e => {
  e.preventDefault();
  if (input.value.trim().length < 1) alert('Input cannot be blank');

  marvelContainerInfo.innerHTML = '';
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();
  jsonData.data['results'].forEach(el => {
    marvelContainerInfo.innerHTML = `
       <div class="marvel-info">
          <div class="search-output">
            <div
              role="img"
              aria-label="Marvel image found"
              class="marvel-img-holder"
            >
              <img class="marvel-img" src='${
                el.thumbnail['path'] + '.' + el.thumbnail['extension']
              }'>
            </div>
            <h2 class="marvel-name">${el.name}</h2>
          </div>

          <div class="detailed-marvel">
            <p class="detailed-text">${el.description}</p>
          </div>
        </div>

      `;
  });
};

searchBtn.addEventListener('click', getResult);

const removeELements = () => (listContainer.innerHTML = '');

function displayWords(value) {
  input.value = value;
  removeELements();
}

input.addEventListener('keyup', async () => {
  removeELements();
  if (input.value.length < 4) return false;

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();

  jsonData.data['results'].forEach(result => {
    let name = result.name;
    let word = `<b>${name.substr(0, input.value.length)}</b>${name.substr(
      input.value.length
    )}`;
    let html = `<div class="autocomplete-items" onclick="displayWords('${name}')"><p class="item">${word}</p></div>`;
    listContainer.insertAdjacentHTML('beforeend', html);
  });
});
