const container = document.querySelector(".container");
const pageDots = document.querySelector(".page-dots");
const dots = document.querySelector(".dots");
const icons = document.querySelectorAll(".icon");
const pagesList = document.querySelector(".pages-list");
const dotList = document.querySelector(".dots-list");
const pageDetails = document.querySelectorAll(".page-detail");

function currentPage_func(icon) {
  let valueinput = pageDetails[0];
  for (let i = 0; i < pageDetails.length; i++) {
    if (pageDetails[i].classList.contains("current-page")) {
      valueinput = pageDetails[i].textContent;
      valueinput = Number(valueinput);
    }
  }
  // for (let i = 0; i < pageDetails.length; i++) {
  //   if (pageDetails[i].textContent === (valueinput + 1).toString()) {
  //     pageDetails[i].classList.add("current-page");
  //     pageDetails[i - 1].classList.remove("current-page");
  //   }
  // }

  for (let i = 0; i < pageDetails.length; i++) {
    if (
      pageDetails[i].textContent ===
      `${icon === icons[0] ? valueinput - 1 : valueinput + 1}`.toString()
    ) {
      pageDetails[i].classList.add("current-page");
      pageDetails[`${icon === icons[0] ? i + 1 : i - 1}`].classList.remove(
        "current-page"
      );
    }
  }
}

container.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.classList.contains("page-dots")) {
    dots.classList.toggle("hidden");
  }

  if (clicked.classList.contains("page-detail")) {
    console.log("page clicked");
  }

  if (clicked === icons[0] || clicked === icons[1]) currentPage_func(clicked);
});

console.log(pageDetails);
