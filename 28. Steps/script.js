const container = document.querySelector(".container");
const sectionStep = document.querySelector(".section--steps");
const button = document.querySelector("button");
const article = document.querySelectorAll(".article");
const icons = document.querySelector(".icon");
const number = document.querySelectorAll(".number");
const articleContent = document.querySelector(".article-content");
const articleTitle = document.querySelectorAll(".article-title");

// clicked-active
// article--hover

container.addEventListener("click", function (e) {
  const parent = e.target.closest(".article");
  for (let i = 0; i < article.length; i++) {
    article[i].classList.remove("clicked-active");
    article[i].classList.remove("centering-all--items");
    number[i].classList.add("hidden");
    articleTitle[i].classList.remove("hidden");
    articleTitle[i].classList.add("vertical-title");
  }

  parent.classList.add("clicked-active");
  parent.querySelector(".article-title").classList.add("hidden");
  const articleNumber = parent.querySelector(".number").textContent;

  let linear_gradient = `linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42))`;
  let imagePick = ``;

  if (articleNumber === "1") imagePick = `url(imgs/maize.jpg)`;
  else if (articleNumber === "2") imagePick = `url(imgs/chicks1.jpg)`;
  else if (articleNumber === "3") imagePick = `url("imgs/meat2.jpg")`;
  else if (articleNumber === "4") imagePick = `url("imgs/transport.jpg")`;
  else if (articleNumber === "5") imagePick = `url("imgs/partnership.jpg")`;
  else if (articleNumber === "6") imagePick = `url("imgs/satisfaction.jpg")`;

  if (articleNumber === 4) sectionStep.style.backgroundPosition = "bottom";
  else sectionStep.style.backgroundPosition = "center";
  sectionStep.style.backgroundImage = `${linear_gradient},${imagePick}`;
});

// container.addEventListener("mouseover", function (e) {
//   const parent = e.target.closest(".article");
//   for (let i = 0; i < article.length; i++) {
//     article[i].classList.remove("article--hover");
//   }

//   parent.classList.add("article--hover");
//   parent.querySelector(".number").classList.remove("hidden");
// });
