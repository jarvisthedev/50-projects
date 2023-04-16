const container = document.querySelector(".container");
const containerDay = document.querySelector(".day");
const containerTime = document.querySelector(".time");
const containerDate = document.querySelector(".date");

const newDate = new Date();
console.log(newDate);
console.log(
  new Intl.DateTimeFormat("en-US", { month: "long" }).format(newDate)
);
console.log(
  new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(newDate)
);

const newDate_date = newDate.getDate();
const newDate_month = newDate.getMonth();
const newDate_day = newDate.getDay();
const newDate_year = newDate.getFullYear();
const newDate_hour = newDate.getHours();
const newDate_min = newDate.getMinutes();
const newDate_sec = newDate.getSeconds();

console.log(newDate_date);
console.log(newDate_month);
console.log(newDate_day);
console.log(newDate_year);
console.log(newDate_hour);
console.log(newDate_min);
console.log(newDate_sec);
