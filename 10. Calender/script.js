const container = document.querySelector(".container");
const todayWeekday = document.querySelector(".today-weekday");
const todayDate = document.querySelector(".today-date");
const todayMonth = document.querySelector(".current-month");

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
  todayWeekday.textContent = newDate_month;
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
