const sectionHead = document.querySelector(".section--head");

sectionHead.addEventListener("mouseover", function (e) {
  e.preventDefault();
  const parentHover = e.target.closest(".parent-header-hover");
  if (!parentHover) return;
  const childHover = parentHover.querySelector(".child-header-hover");
  if (childHover.classList.contains("hidden"))
    childHover.classList.remove("hidden");
});

sectionHead.addEventListener("mouseout", function (e) {
  e.preventDefault();
  const parentHover = e.target.closest(".parent-header-hover");
  if (!parentHover) return;
  const childHover = parentHover.querySelector(".child-header-hover");
  childHover.classList.add("hidden");
});
