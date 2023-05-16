const sectionPricing = document.querySelector(".section--pricing");
const review = document.querySelectorAll(".review");

function addingRemovingHiddenClass() {
  for (let i = 0; i < review.length; i++) {
    let hiddenClass = 0;
    if (!review[i].classList.includes("hidden")) {
      review[i].classList.add("hidden");
      hiddenClass += i + 2;
      if (hiddenClass > review.length)
        hiddenClass = review.length - hiddenClass;
      review[hiddenClass].classList.add("hidden");
    }
  }
}

setInterval(() => {
  addingRemovingHiddenClass();
}, 1000 * 30);
