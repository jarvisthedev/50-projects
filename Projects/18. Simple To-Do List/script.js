const sectionToDoList = document.querySelector('.section--to-do');
const toDoList = document.querySelector('.list');
const userInput = document.querySelector('.user-input');

sectionToDoList.addEventListener('click', function (e) {
  const clicked = e.target;
  if (clicked.classList.contains('ph-x')) clicked.parentNode.remove();

  if (clicked.parentNode.classList.contains('add-todo')) {
    if (userInput.value === '' || userInput.value === ' ')
      alert('Please add some text');
    else if (userInput.value.length > 40)
      alert('Maximum of 40 characters needed');
    else {
      const html = `
        <li class="list-detail">
          <hr class="hr" />
          <i class="ph hidden ph-check-square"></i>
          <i class="ph ph-square"></i>
          <p class="todo-text">${userInput.value}</p>
          <i class="ph ph-x"></i>
        </li>`;
      userInput.value = '';
      toDoList.insertAdjacentHTML('afterbegin', html);
    }
  }

  if (clicked.classList.contains('ph-square')) {
    clicked.classList.add('hidden');
    clicked.previousElementSibling.classList.remove('hidden');
    clicked.nextElementSibling.style.textDecoration = 'line-through';
  }

  if (clicked.classList.contains('ph-check-square')) {
    clicked.classList.add('hidden');
    clicked.nextElementSibling.classList.remove('hidden');
    clicked.nextElementSibling.nextElementSibling.style.textDecoration = 'none';
  }
});
