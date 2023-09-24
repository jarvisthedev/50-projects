const menu_bar = document.querySelector(".bx-menu");
const empty_div = document.querySelector(".empty");
const section_aside = document.querySelector(".section--aside");

menu_bar.addEventListener("click", () => {
  section_aside.classList.add("visible");
  empty_div.classList.add("blur");
});

section_aside.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.closest(".blank")) {
    empty_div.classList.remove("blur");
    section_aside.classList.remove("visible");
  }
});
