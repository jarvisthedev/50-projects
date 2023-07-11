`use strict`;

const innerContainer = document.querySelector('.section--quiz');
const btnSubmit = document.querySelector('.btn--submit');
const form = document.querySelector('.form');
const questions = document.querySelector('.questions');
const quizes = document.querySelector('.quizes');
const answers = document.querySelectorAll('.ans');

const quiz_category = document.querySelector('.quiz-category');
const quiz_difficulty = document.querySelector('.quiz-difficulty');
const quiz_type = document.querySelector('.quiz-type');
const quiz_number = document.querySelector('.quiz_number');

let numberOfQuestions = 0;
let questionNum = 0;

const consuming_API = () => {
  const state_difficulty =
    quiz_difficulty.value && `&difficulty=${quiz_difficulty.value}`;
  const state_category =
    quiz_category.value && `&category=${quiz_category.value}`;
  const state_type = quiz_type.value && `&type=${quiz_type.value}`;

  return (API_URL = `https://opentdb.com/api.php?amount=${quiz_number.value}${state_category}${state_difficulty}${state_type}`);
};

const apiTo_html = data => {
  const html = `
      <h2 class="secondary-text">Question <span class='current-question'> ${questionNum}</span></h2>
      <p class="quiz">
       ${data.question}
      </p>
      <ul class="answers">
        <li class="ans">${data.correct_answer}</li>
         ${data.incorrect_answers
           .map(answer => `<li class="ans">${answer}</li>`)
           .join('')}
      </ul>

      <p class="score">
        Score <span class="current-scrore"> 0</span>/<span
          class="total-questions">10</span>
      </p>
    `;
  quizes.innerHTML = '';
  quizes.insertAdjacentHTML('afterbegin', html);
};

const quizes_Func = async number => {
  // const res = await fetch(`quizes.json`);
  const res = await fetch(consuming_API());
  const data = await res.json();

  apiTo_html(data.results[number]);
  numberOfQuestions = data.results.length;
};

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  form.classList.add('hidden');
  questions.classList.remove('hidden');

  quizes_Func(questionNum);
});

innerContainer.addEventListener('click', function (e) {
  for (let i = 0; i < numberOfQuestions; i++) {
    console.log(i);
  }
  questionNum += 1;
  e.preventDefault();
  const clicked = e.target;
  if (clicked.classList.contains('ans')) {
    Array.from(answers).map(el => el.classList.remove('ans--correct'));
    clicked.classList.add('ans--correct');
    setTimeout(() => quizes_Func(questionNum), 1000);
  }
});
