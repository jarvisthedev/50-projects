`use strict`;

const sectionPassword = document.querySelector('.section--password');
// section--password

sectionPassword.addEventListener('click', function (e) {
  console.log(e.target.checked);
  // Check the checkbox programmatically
  //   checkbox.checked = true;

  // Uncheck the checkbox programmatically
  //   checkbox.checked = false;
});
