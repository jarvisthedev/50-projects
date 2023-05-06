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

currentMonth = 3;
currentYear = 2009;

// currentMonth=currentMonth===1?currentMonth=13

// // Previous month days
function lastMonth_days(date) {
  const previous_month = date;
  let days = previous_month.getDay();
  console.log(previous_month);
  console.log(previous_month.getDay());

  const firstDate_previous_month = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(previous_month);

  console.log(firstDate_previous_month);

  daysList.innerHTML = `

  `;

  days = days === 0 ? 7 : days;
  console.log(days);
  for (let i = 0; i < days; i++) {
    const html = `<li class="day-details flex prev-month-day">30</li>`;
    daysList.insertAdjacentHTML("beforeend", html);

    console.log("previous month");
  }
}
// month/date/year
lastMonth_days(new Date(`${currentMonth - 1}/01/2023`));

// Current month days
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function currentMonth_days(days) {
  let totalDays = days;

  for (let i = 1; i <= totalDays; i++) {
    // str1.padStart(2, '0')
    const html = `<li class="day-details flex">${i
      .toString()
      .padStart(2, 0)}</li>`;
    daysList.insertAdjacentHTML("beforeend", html);

    console.log("Current month");
  }
}

currentMonth_days(daysInMonth(currentMonth, currentYear)); // 29

// Current month days
function nextMonth_days() {
  // Current month days
  const countDays = document.querySelectorAll(".day-details").length;
  const remainingSlots = 42 - countDays;

  for (let i = 1; i <= remainingSlots; i++) {
    // str1.padStart(2, '0')
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
