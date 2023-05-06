const container = document.querySelector(".container");
const todayWeekday = document.querySelector(".today-weekday");
const todayDate = document.querySelector(".today-date");
const todayMonth = document.querySelector(".current-month");
const daysList = document.querySelector(".days-list");

let currentMonth = 0;
let currentYear = 0;

function update_header(input) {
  const newDate = input;
  const newDate_year = newDate.getFullYear();
  const newDate_date = newDate.getDate();
  const newDate_month = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(newDate);
  const newDate_day = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(newDate);

  todayMonth.textContent = newDate_month;
  todayWeekday.textContent = newDate_day;
  todayDate.textContent = `${newDate_month} ${newDate_date} ${newDate_year}`;
}

update_header(new Date());

setInterval(() => {
  update_header(new Date());
}, 1000);

container.addEventListener("click", function (e) {
  const icon = e.target.classList.contains("icon");
  const dayClicked = e.target.classList.contains("day-details");
  if (icon) {
    console.log("Icon clicked");
  }

  if (dayClicked) {
    console.log("Day clicked");
  }
});

currentMonth = 2;
currentYear = 2023;

// // Previous month days
function lastMonth_days(date) {
  let currMonth = date.getMonth();
  let prevMonth = currMonth - 1;

  let days = date.getDay();

  console.log(date);
  console.log(date.getDay());
  date = new Date(currentYear, prevMonth);

  let prevMonth_days = daysInMonth(prevMonth + 1, currentYear);
  let reverse_lastMonth_days = prevMonth_days - days + 1;

  console.log(`${prevMonth_days} month days`);
  console.log(`${prevMonth + 1} previous month`);
  console.log(`${currMonth + 1} current month`);

  daysList.innerHTML = ``;

  days = days === 0 ? 7 : days;
  console.log(days);
  for (let i = 0; i < days; i++) {
    const html = `<li class="day-details flex prev-month-day">${reverse_lastMonth_days}</li>`;
    daysList.insertAdjacentHTML("beforeend", html);
    reverse_lastMonth_days += 1;

    console.log("previous month");
  }
}
// month/date/year
lastMonth_days(new Date(`${currentMonth}/01/${currentYear}`));

// Current month days
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function currentMonth_days(days) {
  let totalDays = days;

  for (let i = 1; i <= totalDays; i++) {
    const html = `<li class="day-details flex">${i
      .toString()
      .padStart(2, 0)}</li>`;
    daysList.insertAdjacentHTML("beforeend", html);

    console.log("Current month");
  }
}

currentMonth_days(daysInMonth(currentMonth, currentYear));

// Current month days
function nextMonth_days() {
  const countDays = document.querySelectorAll(".day-details").length;
  const remainingSlots = 42 - countDays;

  for (let i = 1; i <= remainingSlots; i++) {
    const html = `<li class="day-details flex next-month-day">${i
      .toString()
      .padStart(2, 0)}</li>`;
    daysList.insertAdjacentHTML("beforeend", html);

    console.log("next month");
  }
  console.log(countDays);
  console.log(remainingSlots);
}

nextMonth_days();
