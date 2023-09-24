const container = document.querySelector('.container');
const todayWeekday = document.querySelector('.today-weekday');
const todayDate = document.querySelector('.today-date');
const todayMonth = document.querySelector('.current-month');
const daysList = document.querySelector('.days-list');
const dayDetails = document.querySelectorAll('.day-details');

let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();
let shade_month;

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function update_header(input) {
  const newDate_year = input.getFullYear();
  const newDate_date = input.getDate();
  shade_month = input.getMonth() + 1;
  const newDate_month = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(input);
  const newDate_day = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(input);

  todayMonth.textContent = newDate_month;
  todayWeekday.textContent = newDate_day;
  todayDate.textContent = `${newDate_month} ${newDate_date} ${newDate_year}`;
}

let currMonth;
function lastMonth_days(date) {
  currMonth = date.getMonth();
  let prevMonth = currMonth - 1;

  let days = date.getDay();
  date = new Date(currentYear, prevMonth);
  let prevMonth_days = daysInMonth(prevMonth + 1, currentYear);

  daysList.innerHTML = ``;

  days = days === 0 ? 7 : days;
  let lastDays = prevMonth_days - days + 1;
  for (let i = 0; i < days; i++) {
    const html = `<li><p class="day-details flex prev-month-day">${lastDays}</></li>`;
    daysList.insertAdjacentHTML('beforeend', html);
    lastDays += 1;
  }
}

function currentMonth_days(days) {
  let year = new Date(`${currentMonth}/01/${currentYear}`);
  const todaysYear = new Date();

  for (let i = 1; i <= days; i++) {
    let shadeDate;

    if (shade_month === new Date().getMonth() + 1 && i === new Date().getDate())
      shadeDate = 'current-day';
    if (
      currMonth + 1 !== new Date().getMonth() + 1 &&
      i === new Date().getDate()
    )
      shadeDate = 'day-clicked';

    const html = `<li><p class="day-details ${shadeDate} flex">${i
      .toString()
      .padStart(2, 0)}</p></li>`;

    daysList.insertAdjacentHTML('beforeend', html);
  }

  const newDate_month = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(year);
  todayMonth.textContent =
    currentYear !== todaysYear.getFullYear()
      ? `${newDate_month} ${currentYear}`
      : newDate_month;
}

function nextMonth_days() {
  const countDays = document.querySelectorAll('.day-details').length;
  const remainingSlots = 42 - countDays;

  for (let i = 1; i <= remainingSlots; i++) {
    const html = `<li><p class="day-details flex next-month-day">${i
      .toString()
      .padStart(2, 0)}</p></li>`;
    daysList.insertAdjacentHTML('beforeend', html);
  }
}

function allFuctions_helper() {
  lastMonth_days(new Date(`${currentMonth}/01/${currentYear}`));
  currentMonth_days(daysInMonth(currentMonth, currentYear));
  nextMonth_days();
}

container.addEventListener('click', function (e) {
  const list = e.target;
  if (
    list.classList.contains('ph-caret-left') ||
    list.classList.contains('prev-month-day')
  )
    currentMonth -= 1;

  if (
    list.classList.contains('ph-caret-right') ||
    list.classList.contains('next-month-day')
  )
    currentMonth += 1;

  if (currentMonth === 0) {
    currentMonth = 12;
    currentYear -= 1;
  }

  if (currentMonth === 13) {
    currentMonth = 1;
    currentYear += 1;
  }

  allFuctions_helper();
});

update_header(new Date());
allFuctions_helper();

setInterval(() => {
  update_header(new Date());
  allFuctions_helper();
}, 1000 * 60 * 60);
