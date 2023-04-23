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
