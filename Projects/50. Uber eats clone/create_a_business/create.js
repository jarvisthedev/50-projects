const sectionHeader = document.querySelector(".header");
const innerContainer = document.querySelectorAll(".inner-container");

const sectionHero = document.querySelector(".section--hero");
const sectionFAQ = document.querySelector(".section--faq");
const sectionBusinessMeals = document.querySelector(".section--business-meals");

const ui__howWorks = document.querySelector(".how-works");
const ui__solutions = document.querySelector(".solutions-ui");
const ui__teams = document.querySelector(".industrial-team");
const ui__resources = document.querySelector(".resources-ui");

const arr__up = document.querySelectorAll(
  `ion-icon[name="chevron-up-outline"]`
);
const arr__down = document.querySelectorAll(
  `ion-icon[name="chevron-down-outline"]`
);

sectionHeader.addEventListener("click", (e) => {
  const clicked = e.target;
  let _arrows = "";

  if (clicked.closest(".nav-detail")) {
    innerContainer.forEach((el) => el.classList.add("hidden"));
    arr__up.forEach((el) => el.classList.add("hidden"));
    arr__down.forEach((el) => el.classList.remove("hidden"));

    if (clicked.closest(".how-it-works")) {
      ui__howWorks.classList.remove("hidden");
      _arrows = clicked.closest(".how-it-works").querySelectorAll(`ion-icon`);
    } else if (clicked.closest(".solutions")) {
      ui__solutions.classList.remove("hidden");
      _arrows = clicked.closest(".solutions").querySelectorAll(`ion-icon`);
    } else if (clicked.closest(".teams")) {
      ui__teams.classList.remove("hidden");
      _arrows = clicked.closest(".teams").querySelectorAll(`ion-icon`);
    } else if (clicked.closest(".resources")) {
      ui__resources.classList.remove("hidden");
      _arrows = clicked.closest(".resources").querySelectorAll(`ion-icon`);
    }
    _arrows.forEach((el) => el.classList.toggle("hidden"));
  }

  if (!clicked.closest(".nav-detail")) {
    innerContainer.forEach((el) => el.classList.add("hidden"));
    arr__up.forEach((el) => el.classList.add("hidden"));
    arr__down.forEach((el) => el.classList.remove("hidden"));
  }
});

sectionHero.addEventListener("click", (e) => {
  innerContainer.forEach((el) => el.classList.add("hidden"));
  arr__up.forEach((el) => el.classList.add("hidden"));
  arr__down.forEach((el) => el.classList.remove("hidden"));
});

sectionBusinessMeals.addEventListener("click", (e) => {
  innerContainer.forEach((el) => el.classList.add("hidden"));
  arr__up.forEach((el) => el.classList.add("hidden"));
  arr__down.forEach((el) => el.classList.remove("hidden"));
});

sectionFAQ.addEventListener("click", (e) => {
  const clicked = e.target;
  const parentEl = clicked.closest(".questions li");
  const child_icon = parentEl.querySelectorAll("ion-icon");

  if (!parentEl) return;
  parentEl.querySelector(".ans").classList.toggle("visible");
  child_icon.forEach((el) => el.classList.toggle("hidden"));
});
