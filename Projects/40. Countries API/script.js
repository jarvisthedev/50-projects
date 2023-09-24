'use strict';

const sectionCountries = document.querySelector('.section--countries');
const input = document.querySelector('.input-text');
const searchBtn = document.querySelector('.search-btn');
const searchOutput = document.querySelector('.search-output');

sectionCountries.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target === searchBtn)
    fetch(
      `https://restcountries.com/v3.1/name/${input.value.trim()}?fullText=true`
    )
      .then(response => response.json())
      .then(data => {
        [data] = data;
        const html = `
            <div class="country-info">
                <div
                  role="img"
                  aria-label="Searched country flag rendered"
                  class="flag-holder"
                >
                  <img src="${data.flags.svg}" alt="${data.flags.alt}" />
                </div>
                <h2 class="country-name"><a target="_blank" href="${
                  data.maps.googleMaps
                }">${input.value}</a></h2>
            </div>

            <div class="detailed-info">
              <p>Capital: <span class="capital">${data.capital[0]}</span></p>
              <p>Continent: <span class="continent">${
                data.continents[0]
              }</span></p>
              <p>Population: <span class="population">${
                data.population
              }</span></p>
              <p>Currency: <span class="currency">${
                Object.values(data.currencies)[0].name
              } - ${Object.keys(data.currencies)[0]}</span></p>
              <p>Common Language: <span class="language">${Object.values(
                data.languages
              ).join(', ')}</span></p>
            </div>
        `;

        searchOutput.innerHTML = '';
        searchOutput.insertAdjacentHTML('afterbegin', html);
      })
      .catch(() => {
        searchOutput.innerHTML = '';
        searchOutput.insertAdjacentHTML(
          'beforeend',
          `<p>Country not found
           check your spelling and try again</p>`
        );
      });
});
