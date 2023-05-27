const sectionAccordion = document.querySelector(".section--accordion");
// component
// arrow-down
//
// response

sectionAccordion.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains("ph-thin")) return;
  const parentComponent = clicked.closest(".component");
  const response = parentComponent.querySelector(".response");

  console.log(parentComponent);
  console.log(response);
});
