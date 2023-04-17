const container = document.querySelector(".container");
const containerDay = document.querySelector(".day");
const containerTime = document.querySelector(".time");
const containerDate = document.querySelector(".date");

function update_time() {
  const newDate = new Date();

  const newDate_month = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(newDate);
  const newDate_day = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(newDate);
  const newDate_date = newDate.getDate();
  const newDate_year = newDate.getFullYear();
  const newDate_hour = newDate.getHours();
  const newDate_min = newDate.getMinutes();
  const newDate_sec = newDate.getSeconds();

  containerDay.textContent = newDate_day.toUpperCase();
  containerDate.textContent = `${newDate_month.toUpperCase()}, ${newDate_date
    .toString()
    .padStart(2, 0)} ${newDate_year}`;

  containerTime.innerHTML = `${newDate_hour
    .toString()
    .padStart(2, 0)} <span class="dot">:</span>${newDate_min
    .toString()
    .padStart(2, 0)} <span class="dot">:</span>${newDate_sec
    .toString()
    .padStart(2, 0)}`;
}
setInterval(() => {
  update_time();
}, 1000);
