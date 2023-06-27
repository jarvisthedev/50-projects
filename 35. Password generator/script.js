`use strict`;

const sectionPassword = document.querySelector('.section--password');

const uppercaseInc = document.querySelector('.uppercase_inc');
const lowercaseInc = document.querySelector('.lowercase_inc');
const numberInc = document.querySelector('.number_inc');
const symbolsInc = document.querySelector('.symbols_inc');
// section--password

sectionPassword.addEventListener('click', function (e) {
  //   console.log(e.target.checked);
  // Check the checkbox programmatically
  //   checkbox.checked = true;

  // Uncheck the checkbox programmatically
  //   checkbox.checked = false;

  console.log(uppercaseInc.checked);
  console.log(lowercaseInc.checked);
  console.log(numberInc.checked);
  console.log(symbolsInc.checked);

  if (e.target.closest('.generate')) console.log(1111111);
  if (e.target.closest('.copy')) console.log(2222222);
});
