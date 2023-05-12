const sectionFaq = document.querySelector(".section--faq");
const quizText = document.querySelectorAll(".quiz-text");
const downArrow = document.querySelectorAll(".ph-caret-down");
const upArrow = document.querySelectorAll(".ph-caret-up");

sectionFaq.addEventListener("click", function (e) {
  const clicked = e.target;
  const up__arrow = clicked.classList.contains("ph-caret-up");
  const down__arrow = clicked.classList.contains("ph-caret-down");

  if (up__arrow || down__arrow) {
    const up_arrow = clicked.nextElementSibling;
    const quizTextElement = clicked.closest(".quiz-top").nextElementSibling;

    if (down__arrow) {
      for (let i = 0; i < quizText.length; i++) {
        quizText[i].classList.add("hidden");
        downArrow[i].classList.remove("hidden");
        upArrow[i].classList.add("hidden");
      }

      clicked.classList.add("hidden");
      up_arrow.classList.remove("hidden");
      quizTextElement.classList.remove("hidden");
    }

    if (up__arrow) {
      const down_arrow = clicked.previousElementSibling;
      down_arrow.classList.remove("hidden");
      quizTextElement.classList.add("hidden");

      clicked.classList.add("hidden");
    }
  }
});
