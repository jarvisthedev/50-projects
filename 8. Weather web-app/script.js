const inputText = document.querySelector(".input-text");
const city = document.querySelector(".city");
const dateIn = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const hi_Low = document.querySelector(".hi-low");

function dateUpdate() {
  const newDate = new Date();

  const date = newDate.getDate();
  const year = newDate.getFullYear();
  const month = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(newDate);
  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(newDate);

  dateIn.textContent = `${day}, ${date} ${month} ${year}`;
}

dateUpdate();
setInterval(() => {
  dateUpdate();
}, 1000);

const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/",
};

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

// a0e909bc2034aa3e7a07f999e095251e
// a1e9fb02d683f637a96db2f58a38e793

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
