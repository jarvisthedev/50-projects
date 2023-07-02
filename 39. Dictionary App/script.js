'use strict';

const sectionDict = document.querySelector('.section--dictionary');
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

const wordInfor = document.querySelector('.word-infor');
const wordSearch = document.querySelector('.word-input');
const btn = document.querySelector('.btn');
const sound = document.querySelector('.ph-speaker-high');

sectionDict.addEventListener('click', function (e) {
  e.preventDefault();
  let wordInput = wordSearch.value;
  if (e.target === btn) {
    fetch(`${url} ${wordInput}`)
      .then(response => {
        if (response.status === 404) {
          wordInfor.innerHTML = '';
          return wordInfor.insertAdjacentHTML(
            'beforeend',
            `<p>Word not found try another word</p>`
          );
        } else return response.json();
      })
      .then(data => {
        const html = `
              <div class="word-speaker">
                <h2 class="primary-text">${data[0].word}</h2>
                <p><i class="ph ph-speaker-high"></i></p>
              </div>
              <p class="span">
                <span class="language">${
                  data[0].meanings[0].partOfSpeech
                } </span>/<span class="propounce"
                  >${data[0]?.phonetic ?? ''}</span
                >/
              </p>
              <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
              </p>
              <p class="word-example">
                ${data[0].meanings[0].definitions[0]?.example ?? ''}
              </p>`;
        wordInfor.innerHTML = '';
        wordInfor.insertAdjacentHTML('beforeend', html);
      });
  }
});

// if (response.status === 404) {
//   console.log('Resource not found!');
//   // Handle the error - display an error message, redirect, or retry the request
// } else {
//   // Handle the successful response
//   return response.json(); // Assuming the response is in JSON format
// }
