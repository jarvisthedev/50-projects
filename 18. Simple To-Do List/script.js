const sectionToDoList = document.querySelector(".section--to-do-list ");

sectionToDoList.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("delete")) {
    clicked.parentNode.remove();
  }
});
