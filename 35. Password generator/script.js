'use strict';

const sectionPassword = document.querySelector('.section--password');
const pswrdLen = document.querySelector('.pswrd_len');
const uppercaseInc = document.querySelector('.uppercase_inc');
const lowercaseInc = document.querySelector('.lowercase_inc');
const numberInc = document.querySelector('.number_inc');
const symbolsInc = document.querySelector('.symbols_inc');
const viewBox = document.querySelector('.textbox');

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function uniqueChar() {
  const uniqueChars = `"~!@#$%^&*()-_+={}[]|\:;"'<>,.?/`;
  return uniqueChars[Math.floor(Math.random() * uniqueChars.length)];
}

function uniqAlphabet() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}

sectionPassword.addEventListener('click', function (e) {
  const passLength = pswrdLen.value;
  if (passLength < 8 || passLength > 16) return;

  let finalPassword = '';
  let uppercaseIndex = 0;
  let lowercaseIndex = 0;
  let numberIndex = 0;
  let symbolsIndex = 0;

  for (let i = 0; i < passLength; i++) {
    if (uppercaseInc.checked && (i % 4 === 0 || i === 0)) {
      finalPassword += uniqAlphabet().toUpperCase();
      uppercaseIndex++;
    }

    if (
      lowercaseInc.checked &&
      (i % 4 === 1 || i === 0 || (i % 4 === 3 && !symbolsInc.checked))
    ) {
      finalPassword += uniqAlphabet().toLowerCase();
      lowercaseIndex++;
    }

    if (
      numberInc.checked &&
      (i % 4 === 2 ||
        i === 0 ||
        (i % 4 === 3 && !symbolsInc.checked && !lowercaseInc.checked))
    ) {
      finalPassword += randomNumber();
      numberIndex++;
    }

    if (
      symbolsInc.checked &&
      (i % 4 === 3 ||
        i === 0 ||
        (i % 4 === 2 && !numberInc.checked) ||
        (i % 4 === 1 && !numberInc.checked && !lowercaseInc.checked))
    ) {
      finalPassword += uniqueChar();
      symbolsIndex++;
    }
  }

  // Fill the remaining characters with lowercase letters
  for (
    let i = uppercaseIndex + lowercaseIndex + numberIndex + symbolsIndex;
    i < passLength;
    i++
  ) {
    finalPassword += uniqAlphabet().toLowerCase();
  }

  if (e.target.closest('.generate')) {
    console.log(finalPassword);
    viewBox.value = finalPassword;
  }
});
