const section_reg = document.querySelector('.section--registation');
const loginForm = document.querySelector('.sign-up-page');
const signupForm = document.querySelector('.sign-in-page');

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const mail2 = document.querySelector('.mail2');
const psrd2 = document.querySelector('.psrd2');

const validateData = data => {
  return data.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validateEmail = mail => {
  if (validateData(mail)) return true;
  else return false;
};

const verifyPassword = password => {
  const pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?~`[\]\\;',./])(?!.*\s).{8,}$/;
  return pattern.test(password);
};

name.focus();
mail2.focus();

section_reg.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target;

  const name_val = name.value;
  const email_val = email.value;
  const password_val = password.value;

  if (clicked.classList.contains('btn--sign-up'))
    if (name_val && validateEmail(email_val) && verifyPassword(password_val))
      window.location.href = 'index.html';
    else alert('Please Enter valid email and password then try again.');

  if (clicked.classList.contains('btn--sign-in'))
    if (verifyPassword(psrd2.value) && validateEmail(mail2.value))
      window.location.href = 'index.html';
    else alert('Invalid credentials. Please try again.');

  if (clicked.closest('.reminder')) {
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
  }
});
