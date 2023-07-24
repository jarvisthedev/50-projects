const section_reg = document.querySelector('.section--registation');
const loginForm = document.querySelector('.sign-up-page');
const signupForm = document.querySelector('.sign-in-page');

// console.log(section_reg);
section_reg.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target;

  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  //

  if (clicked.classList.contains('btn--sign-up')) {
    if (
      name &&
      email &&
      password &&
      password.length >= 6 &&
      email.includes('@') &&
      email.includes('.')
    )
      window.location.href = 'index.html';
    else {
      alert('Please Enter valid email and password then try again.');
    }
  }

  //   if (clicked.classList.contains('btn--sign-in')) {
  //     if (
  //       password &&
  //       password.length >= 6 &&
  //       email &&
  //       email.includes('@') &&
  //       email.includes('.')
  //     )
  //       window.location.href = 'index.html';
  //     else {
  //       alert('Invalid credentials. Please try again.');
  //     }
  //   }

  if (clicked.closest('.reminder')) {
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
  }
});
