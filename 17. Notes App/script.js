const sectionNotes = document.querySelector(".section--notes");

const inputText = document.querySelector(".input-text");
const notesSaved = document.querySelector(".notes-saved");
const colorChange = document.querySelector(".color");

function clickEvent(e) {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.classList.contains("add")) {
    if (inputText.value === "" || inputText.value === " ")
      alert("Please add some text");
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
}

sectionNotes.addEventListener("click", clickEvent);

sectionNotes.removeEventListener("click", clickEvent);
sectionNotes.addEventListener("change", function (e) {
  if (e.target.classList.contains("color")) {
    const selectedColor = e.target.value;
    inputText.style.color = selectedColor;
  }
  sectionNotes.addEventListener("click", clickEvent);
});
