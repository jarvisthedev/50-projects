'use strict';

const sectionMarvel = document.querySelector('.section--marvel');
const input = document.querySelector('.input-text');
const searchBtn = document.querySelector('.search-btn');
const marvelContainerInfo = document.querySelector('.marvel-info');

const date = new Date();
const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

const getResult = async () => {
  //   if (input.value.trim().length < 1) alert('Input cannot be blank');
  console.log(`${input.value} value`);
  marvelContainerInfo.innerHTML = '';
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();
  jsonData.data['results'].forEach(el => {
    marvelContainerInfo.innerHTML += `
      <div class='card-container'>
          <div class='container-character-image'>
              <img src='${
                el.thumbnail['path'] + '.' + el.thumbnail['extension']
              }'>
          </div>
          <div class='character-name'>${el.description}</div>
      </div>`;
  });
};

searchBtn.addEventListener('click', getResult);
window.onload = () => {
  getResult();
};
