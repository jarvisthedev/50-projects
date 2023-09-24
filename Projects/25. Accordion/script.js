const sectionAccordion = document.querySelector(".section--accordion");
const responseAll = document.querySelectorAll(".response");
const componentAll = document.querySelectorAll(".component");

sectionAccordion.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains("ph-thin")) return;

  const parentComponent = clicked.closest(".component");
  const response = parentComponent.querySelector(".response");
  for (let i = 0; i < responseAll.length; i++) {
    responseAll[i].classList.add("hidden");
    componentAll[i].classList.remove("active");
  }

  parentComponent.classList.add("active");
  response.classList.remove("hidden");
});
