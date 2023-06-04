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
  console.log(articleNumber);

  // .section--steps {
  //   margin: 6.4rem auto;
  //   max-width: 100vw;

  //   /* imgs/chicken.jpg */
  //   /* imgs/meat2 */
  //   /* imgs/maize.jpg */
  //   /* imgs/satisfaction.jpg */
  //   /* imgs/satisfaction1.jpg */
  //   /* imgs/partnership.jpg */
  //   /* imgs/transport.jpg  ///// bottom */

  //   background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  //     url("imgs/meat3.jpg");
  //   background-repeat: no-repeat;
  //   /* background-position: center; */
  //   background-size: cover;
  // }

  //
  //
  //

  if (articleNumber === "1") {
    sectionStep.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(imgs/transport.jpg)`;
  } else if (articleNumber === "2") {
    sectionStep.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
       url("imgs/chicken.jpg");`;
  } else if (articleNumber === "3") {
    sectionStep.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
       url("imgs/transport.jpg");`;
  } else if (articleNumber === "4") {
    sectionStep.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
       url("imgs/transport.jpg");`;
  } else if (articleNumber === "5") {
    sectionStep.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
       url("imgs/partnership.jpg");`;
  } else if (articleNumber === "6") {
    sectionStep.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
       url("imgs/partnership.jpg");`;
  }
});

// container.addEventListener("mouseover", function (e) {
//   const parent = e.target.closest(".article");
//   for (let i = 0; i < article.length; i++) {
//     article[i].classList.remove("article--hover");
//   }

//   parent.classList.add("article--hover");
//   parent.querySelector(".number").classList.remove("hidden");
// });

console.log(article);
// sectionStep.style.backgroundImage = "url(./imgs/partnership.jpg)";
