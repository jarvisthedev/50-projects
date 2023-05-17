const review = document.querySelectorAll(".review");

function addingRemovingHiddenClass() {
  for (let i = 0; i < review.length; i++) {
    if (!review[i].classList.contains("hidden")) {
      let hiddenClass = i + 2;
      review[i].classList.add("hidden");
      hiddenClass =
        hiddenClass >= review.length
          ? hiddenClass - review.length
          : hiddenClass;

      review[hiddenClass].classList.remove("hidden");
      return;
    }
  }
}

setInterval(() => {
  addingRemovingHiddenClass();
}, 1000 * 45);
