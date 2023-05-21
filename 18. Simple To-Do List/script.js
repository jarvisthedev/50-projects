const sectionToDoList = document.querySelector(".section--to-do-list ");
const toDoList = document.querySelector(".to-do-list");
const inputText = document.querySelector(".input-text");

sectionToDoList.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("delete")) {
    clicked.parentNode.remove();
  }

  if (clicked.parentNode.classList.contains("adding-todo")) {
    if (inputText.value === "" || inputText.value === " ")
      alert("Please add some text");
    else if (inputText.value.length > 40)
      alert("Maximum of 40 characters needed");
    else {
      const html = `
        <li class="do-detail">
          <hr class="hr" />
          <ion-icon class="icon checked hidden" name="checkbox-outline"></ion-icon>
          <ion-icon class="icon unchecked" name="square-outline"></ion-icon>
          <div class="todo-text">${inputText.value}</div>
          <ion-icon class="icon delete" name="close-outline"></ion-icon>
        </li>
      `;
      inputText.value = "";
      toDoList.insertAdjacentHTML("afterbegin", html);
    }
  }

  //   style="text-decoration: line-through;"
  if (clicked.classList.contains("unchecked")) {
    clicked.classList.add("hidden");
    clicked.previousElementSibling.classList.remove("hidden");
    clicked.nextElementSibling.style.textDecoration = "line-through";
  }

  if (clicked.classList.contains("checked")) {
    clicked.classList.add("hidden");
    clicked.nextElementSibling.classList.remove("hidden");
    clicked.nextElementSibling.nextElementSibling.style.textDecoration = "none";
  }
});
