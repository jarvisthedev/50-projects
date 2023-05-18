const sectionNotes = document.querySelector(".section--notes");

const addNote = document.querySelector(".add");
const inputText = document.querySelector(".input-text");
const deleteNote = document.querySelectorAll(".delete");
const notesSaved = document.querySelector(".notes-saved");

sectionNotes.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.classList.contains("add")) {
    console.log(inputText.value);
    const html = `<li class="notes">
      <div class="note">${inputText.value}</div>
      <div class="delete">x</div>
      </li>`;
    inputText.value = "";
    notesSaved.insertAdjacentHTML("afterbegin", html);
  }

  if (clicked.classList.contains("delete")) {
    clicked.parentNode.remove();
  }
});
