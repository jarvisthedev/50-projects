const sectionHead = document.querySelector(".section--head");
const container = document.querySelector(".container");

sectionHead.addEventListener("mouseover", function (e) {
  e.preventDefault();
  const parentHover = e.target.closest(".parent-header-hover");
  //   child-header-hover
  const childHover = parentHover.querySelector(".child-header-hover");
  // if (childHover.classList.remove("hidden")) {
  // childHover.classList.remove("hidden");
  // }
  console.log(1122);
  console.log(parentHover);
  console.log(childHover);
});
