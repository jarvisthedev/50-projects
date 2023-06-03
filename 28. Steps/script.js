const sectionSteps = document.querySelector(".container");

const button = document.querySelector("button");
const article = document.querySelectorAll(".article");
const icons = document.querySelector(".icon");
const number = document.querySelectorAll(".number");
const articleContent = document.querySelector(".article-content");
const articleTitle = document.querySelectorAll(".article-title");

// clicked-active
// article--hover

sectionSteps.addEventListener("click", function (e) {
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
});

// sectionSteps.addEventListener("mouseover", function (e) {
//   const parent = e.target.closest(".article");
//   for (let i = 0; i < article.length; i++) {
//     article[i].classList.remove("article--hover");
//   }

//   parent.classList.add("article--hover");
//   parent.querySelector(".number").classList.remove("hidden");
// });
