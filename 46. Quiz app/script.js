`use strict`;

const container = document.querySelector('.section--quiz');
const form = document.querySelector('.form');
const questions = document.querySelector('.questions');
const last_page = document.querySelector('.last-page');
const quizes = document.querySelector('.quizes');
const answers = document.querySelectorAll('.ans');

const quiz_category = document.querySelector('.quiz-category');
const quiz_difficulty = document.querySelector('.quiz-difficulty');
const quiz_type = document.querySelector('.quiz-type');
const quiz_number = document.querySelector('.quiz_number');
const currentScore = document.querySelector('.current-scrore');

let numberOfQuestions = 0;
let questionNum = 0;
let current_score = 0;

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
      <h2 class="secondary-text">Question <span class='current-question'> ${
        questionNum + 1
      }</span></h2>
      <p class="quiz">
       ${data.question}
      </p>
      <ul class="answers">
        <li class="ans correct">${data.correct_answer}</li>
         ${data.incorrect_answers
           .map(answer => `<li class="ans">${answer}</li>`)
           .join('')}
      </ul>

      <p class="score">
        Score <span class="current-scrore"> ${current_score} </span>/<span
          class="total-questions">${numberOfQuestions}</span>
      </p>
    `;
  quizes.innerHTML = '';
  quizes.insertAdjacentHTML('afterbegin', html);
};

const quizes_Func = async number => {
  const res = await fetch(consuming_API());
  const data = await res.json();
  numberOfQuestions = data.results.length;
  apiTo_html(data.results[number]);
};

// HELPER FUNCTIONS
const submitBtn = () => {
  form.classList.add('hidden');
  questions.classList.remove('hidden');
  quizes_Func(questionNum);
};

const renderAnswer = () => {
  Array.from(answers).map(el => el.classList.remove('ans--correct'));
  clicked.classList.add('ans--correct');
  if (clicked.classList.contains('correct')) current_score += 1;
  questionNum += 1;

  if (questionNum === numberOfQuestions) {
    currentScore.textContent = current_score;
    last_page.classList.remove('hidden');
    questions.classList.add('hidden');
    return;
  }
  setTimeout(() => quizes_Func(questionNum), 1000);
};

const resetFunc = () => {
  last_page.classList.add('hidden');
  form.classList.remove('hidden');

  quizes.innerHTML = `
      <div class="spinner-div">
        <div class="spinner"></div>
      </div>
      `;

  quiz_category.value = 0;
  quiz_difficulty.value = 0;
  quiz_number.value = 10;
  quiz_type.value = 0;

  numberOfQuestions = 0;
  questionNum = 0;
  current_score = 0;
};

container.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.classList.contains('btn--submit')) submitBtn();
  if (clicked.classList.contains('ans')) renderAnswer();
  if (clicked.classList.contains('btn--back')) resetFunc();
});
