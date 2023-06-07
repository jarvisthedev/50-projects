const sectionHead = document.querySelector(".section--head");

sectionHead.addEventListener("mouseover", function (e) {
  e.preventDefault();
  const parentHover = e.target.closest(".parent-header-hover");
  if (!parentHover) return;
  const childHover = parentHover.querySelector(".child-header-hover");

  if (e.target.classList.contains("sec-link")) {
    const secLink = e.target.parentElement;
    secLink.firstChild.classList.add("sec-link-hover");
    secLink.firstChild.style.position = "relative";
  }

  if (childHover.classList.contains("hidden"))
    childHover.classList.remove("hidden");
});

sectionHead.addEventListener("mouseout", function (e) {
  e.preventDefault();
  const parentHover = e.target.closest(".parent-header-hover");
  if (!parentHover) return;
  const childHover = parentHover.querySelector(".child-header-hover");
  childHover.classList.add("hidden");

  if (e.target.classList.contains("sec-link")) {
    const secLink = e.target.parentElement;
    secLink.firstChild.classList.remove("sec-link-hover");
    secLink.firstChild.style.position = "absolute";
  }
});
