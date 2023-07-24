const section_reg = document.querySelector('.section--registation');
const loginForm = document.querySelector('.sign-up-page');
const signupForm = document.querySelector('.sign-in-page');

section_reg.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target;

  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

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

  if (clicked.classList.contains('btn--sign-in')) {
    if (
      password &&
      password.length >= 6 &&
      email &&
      email.includes('@') &&
      email.includes('.')
    )
      window.location.href = 'index.html';
    else {
      alert('Invalid credentials. Please try again.');
    }
  }

  if (clicked.closest('.reminder')) {
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
  }
});

// Emaill verificaion
const validateEmail = email => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = mail => {
  if (validateEmail(mail)) {
    console.log('valid email');
  } else {
    console.log('Invalid email');
  }

  // .focus()
  return false;
};

// Password verificaion
function verifyPassword(password) {
  const pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?~`[\]\\;',./])(?!.*\s).{8,}$/;
  return pattern.test(password);
}
