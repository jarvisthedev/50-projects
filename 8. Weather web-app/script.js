const container = document.querySelector('.section--weather');
const input = document.querySelector('.input');
const dateIn = document.querySelector('.date');

const city = document.querySelector('.city');
const temp = document.querySelector('.temp-number');
const weather = document.querySelector('.weather');
const min_maxTemp = document.querySelector('.min-max-temp');

function dateUpdate() {
  const newDate = new Date();

  const date = newDate.getDate();
  const year = newDate.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(newDate);
  const day = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(newDate);

  dateIn.textContent = `${day}, ${date} ${month} ${year}`;
}

dateUpdate();
setInterval(() => {
  dateUpdate();
}, 1000);

const api = {
  key: 'a0e909bc2034aa3e7a07f999e095251e',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(weatherData => {
      displayResults(weatherData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayResults(weatherData) {
  city.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  temp.textContent = `${weatherData.main.temp}`;
  weather.textContent = `${weatherData.weather[0].main}`;
  min_maxTemp.textContent = `${weatherData.main.temp_min}°C / ${weatherData.main.temp_max}°C`;
}

container.addEventListener('click', function (e) {
  if (!input.value) return;
  getResults(input.value);
});
