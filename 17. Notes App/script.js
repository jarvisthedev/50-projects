const sectionNotes = document.querySelector(".section--notes");

const inputText = document.querySelector(".input-text");
const notesSaved = document.querySelector(".notes-saved");

sectionNotes.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.classList.contains("add")) {
    if (inputText.value === "" || inputText.value === " ")
      alert("Please add some text");
    // console.log(inputText.value);
    else {
      const html = `<li class="notes">
      <div class="note">${inputText.value}</div>
      <div class="delete">x</div>
      </li>`;
      inputText.value = "";
      notesSaved.insertAdjacentHTML("afterbegin", html);
    }
  }

  if (clicked.classList.contains("delete")) {
    clicked.parentNode.remove();
  }
});
