const container = document.querySelector(".container");
const containerDay = document.querySelector(".day");
const containerTimeHour = document.querySelector(".time-hour");
const containerTimeMin = document.querySelector(".minute");
const containerTimeSec = document.querySelector(".second");
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

  containerTimeHour.textContent = `${newDate_hour.toString().padStart(2, 0)}`;
  containerTimeMin.textContent = `${newDate_min.toString().padStart(2, 0)}`;
  containerTimeSec.textContent = `${newDate_sec.toString().padStart(2, 0)}`;
}

update_time();
setInterval(() => {
  update_time();
}, 1000);

container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn")) return;

  let hours = containerTimeHour.textContent;

  const clicked = e.target;
  if (e.target.classList.contains("clock-system--12"))
    if (Number(hours) > 12) containerTimeHour.textContent = Number(hours) - 12;

  console.log(clicked);
  console.log(containerTimeHour.textContent);
});
