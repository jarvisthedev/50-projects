const sectionNotes = document.querySelector(".section--notes");
const noteSaved = document.querySelector(".notes-saved");
const inputText = document.querySelector(".input-text");
const addNote = document.querySelector(".add");

addNote.addEventListener("click", function (e) {
  if (inputText.value === "" || inputText.value === " ")
    alert("Please add some text");
  else {
    const html = `<li class="notes">
      <div class="note">${inputText.value}</div>
      <div class="delete">x</div>
      </li>`;
    inputText.value = "";
    noteSaved.insertAdjacentHTML("afterbegin", html);
  }
});

noteSaved.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("delete")) {
    clicked.parentNode.remove();
  }
});

sectionNotes.addEventListener("change", function (e) {
  if (e.target.classList.contains("color")) {
    const selectedColor = e.target.value;
    inputText.style.color = selectedColor;
  }
});
