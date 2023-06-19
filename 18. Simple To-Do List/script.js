const sectionToDoList = document.querySelector('.section--to-do');
const toDoList = document.querySelector('.list');
const userInput = document.querySelector('.user-input');

sectionToDoList.addEventListener('click', function (e) {
  const clicked = e.target;
  if (clicked.classList.contains('delete')) clicked.parentNode.remove();

  if (clicked.parentNode.classList.contains('adding-todo')) {
    if (userInput.value === '' || userInput.value === ' ')
      alert('Please add some text');
    else if (userInput.value.length > 40)
      alert('Maximum of 40 characters needed');
    else {
      const html = `
        <li class="do-detail">
          <hr class="hr" />
          <ion-icon class="icon checked hidden" name="checkbox-outline"></ion-icon>
          <ion-icon class="icon unchecked" name="square-outline"></ion-icon>
          <p class="todo-text">${userInput.value}</p>
          <ion-icon class="icon delete" name="close-outline"></ion-icon>
        </li>`;
      userInput.value = '';
      toDoList.insertAdjacentHTML('afterbegin', html);
    }
  }

  if (clicked.classList.contains('unchecked')) {
    clicked.classList.add('hidden');
    clicked.previousElementSibling.classList.remove('hidden');
    clicked.nextElementSibling.style.textDecoration = 'line-through';
  }

  if (clicked.classList.contains('checked')) {
    clicked.classList.add('hidden');
    clicked.nextElementSibling.classList.remove('hidden');
    clicked.nextElementSibling.nextElementSibling.style.textDecoration = 'none';
  }
});
