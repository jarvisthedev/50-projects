const container = document.querySelector(".container");
const containerDay = document.querySelector(".day");
const containerTimeHour = document.querySelector(".time-hour");
const containerTimeMin = document.querySelector(".minute");
const containerTimeSec = document.querySelector(".second");
const containerDate = document.querySelector(".date");

const btn_12 = document.querySelector(".clock-system--12");
const btn_24 = document.querySelector(".clock-system--24");

// HELPER FUNCTION THAT UPDATES CLOCK SYSTEM
function btn_12_update_func(hour) {
  if (btn_12.classList.contains("active")) {
    document.querySelector(".time-system").textContent = `${
      hour >= 12 ? "PM" : "AM"
    }`;
    if (hour > 12) hour = hour - 12;
  } else document.querySelector(".time-system").textContent = "";
  containerTimeHour.textContent = `${hour.toString().padStart(2, 0)}`;
}

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
  let newDate_hour = newDate.getHours();
  const newDate_min = newDate.getMinutes();
  const newDate_sec = newDate.getSeconds();

  containerDay.textContent = newDate_day.toUpperCase();
  containerDate.textContent = `${newDate_month.toUpperCase()}, ${newDate_date
    .toString()
    .padStart(2, 0)} ${newDate_year}`;

  containerTimeMin.textContent = `${newDate_min.toString().padStart(2, 0)}`;
  containerTimeSec.textContent = `${newDate_sec.toString().padStart(2, 0)}`;

  btn_12_update_func(newDate_hour);
}

update_time();
setInterval(() => {
  update_time();
}, 1000);

container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn")) return;

  btn_12.classList.toggle("active");
  btn_24.classList.toggle("active");

  btn_12_update_func(new Date().getHours());
});
