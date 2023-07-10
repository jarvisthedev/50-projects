`use strict`;

// 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
const API_KEY = `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`;

const innerContainer = document.querySelector('.inner-container');
const conversation = document.querySelector('.conversations');
const sendBtn = document.querySelector('.ph-telegram-logo');

const btns = document.querySelector('.btns');
const btn__open = document.querySelector('.btn--open');
const btn__close = document.querySelector('.btn--close');
const inputText = document.querySelector('textarea');

const introText = `Hi There 👋️ How can i help you today?`;

btns.addEventListener('click', function (e) {
  const clicked = e.target;
  innerContainer.classList.toggle('hidden');
  btn__open.classList.toggle('hidden');
  btn__close.classList.toggle('hidden');

  if (clicked.closest('.btn--open')) {
    conversation.innerHTML = `
        <p class="chatbot">
          <i class="ph ph-robot"></i>
          <span class="bot-msg"
            >${introText}</span
          >
        </p>`;
  }
});

document.addEventListener(
  'DOMContentLoaded',
  function () {
    autosize(document.querySelectorAll('.input-text'));
  },
  false
);

const generateResponse = input => {
  const API_URL = 'https://api.openai.com/v1/chat/completions';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'hello' }],
    }),
  };

  fetch(API_URL, requestOptions)
    .then(res => res.json())
    .then(data => {
      data;
      console.log(data);
    })
    .catch(err => console.log(err));
};

sendBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const userHtml = `
    <p class="user-msg">${inputText.value}</p>`;
  inputText.value = '';

  const robot = `
        <p class="chatbot">
          <i class="ph ph-robot"></i>
          <span class="bot-msg">Thinking...</span>
        </p>`;

  conversation.insertAdjacentHTML('beforeend', userHtml);
  setTimeout(() => conversation.insertAdjacentHTML('beforeend', robot), 600);

  //   inputText.value;
  generateResponse(inputText.value);
});
