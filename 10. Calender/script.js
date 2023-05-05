const container = document.querySelector(".container");
const todayWeekday = document.querySelector(".today-weekday");
const todayDate = document.querySelector(".today-date");
const todayMonth = document.querySelector(".current-month");
const daysList = document.querySelector(".days-list");

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

  // console.log(newDate_month);
  // console.log(newDate_day);
  // console.log(newDate_year);
  // console.log(newDate_date);

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

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// July
let today_totalDays = daysInMonth(7, 2009); // 31
// February
today_totalDays = daysInMonth(2, 2009); // 28
today_totalDays = daysInMonth(2, 2008); // 29

// month/date/year
const newDat_ex = new Date("05/01/2023");
console.log(newDat_ex);
console.log(newDat_ex.getDay());

const newDate_day_ex = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
}).format(newDat_ex);

console.log(newDate_day_ex);

// daysList.innerHTML = `

// `;

for (let i = 0; i < newDat_ex.getDay(); i++) {
  console.log(1);
}

for (let i = 1; i <= today_totalDays; i++) {
  console.log(1);
}
