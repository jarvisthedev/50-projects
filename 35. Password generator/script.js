`use strict`;

const sectionPassword = document.querySelector('.section--password');

const pswrdLen = document.querySelector('.pswrd_len');
const uppercaseInc = document.querySelector('.uppercase_inc');
const lowercaseInc = document.querySelector('.lowercase_inc');
const numberInc = document.querySelector('.number_inc');
const symbolsInc = document.querySelector('.symbols_inc');

function uniqueChar() {
  const uniqueChars = `"~!@#$%^&*()-_+={}[]|\:;"'<>,.?/`;
  return uniqueChars[Math.trunc(Math.random() * uniqueChars.length)];
}

function uniqAlphabet() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  return alphabets[Math.trunc(Math.random() * alphabets.length)];
}

sectionPassword.addEventListener('click', function (e) {
  const passLength = pswrdLen.value;
  if (passLength < 8 || passLength > 16) return;
  //   console.log(passLength);
  let finalPassword;
  for (let i = 1; i < passLength; i++) {
    console.log(i);
    const char = uniqAlphabet();
    console.log(char);
    finalPassword += char;
  }
  // if (e.target.closest('.copy')) console.log(2222222);
  if (e.target.closest('.generate')) console.log(finalPassword);
});
