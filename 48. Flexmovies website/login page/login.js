`use script`;

const sectionSign = document.querySelector('.section--signInForm');
const signup_login = document.querySelectorAll('.sign p');
const btn_signup_login = document.querySelectorAll('.auth');

const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const checkPassword = password => {
  const paswd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (paswd.test(password.value)) return true;
  else {
    showAlert('Use correct password format', 3000);
    return false;
  }
};

const validateEmail = email => {
  const mail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value.match(mail)) return true;
  else showAlert('Must be a valid email', 3000);
};

const showAlert = (message, duration) => {
  const alertBox = document.createElement('div');
  alertBox.className = 'alert-box';
  alertBox.textContent = message;
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.style.opacity = '0';
    setTimeout(() => document.body.removeChild(alertBox), 1000);
  }, duration);
};

const closestHelper_func = (el, clicked, url) => {
  if (el.closest(clicked)) window.location.href = url;
};

sectionSign.addEventListener('click', e => {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.closest('.auth')) {
    if (!email.hidden)
      if (username && validateEmail(email) && checkPassword(password)) {
        window.location.href = `../index.html`;
        showAlert('Login success', 3000);
      }

    if (email.hidden)
      if (username && checkPassword(password)) {
        window.location.href = `../index.html`;
        showAlert('Login success', 3000);
      }

    usernamepassword.value = '';
    emailpassword.value = '';
    password.value = '';
  }

  closestHelper_func(clicked, '.google', 'https://google.com/');
  closestHelper_func(clicked, '.facebook', 'https://web.facebook.com/login/');
  closestHelper_func(clicked, '.twitter', 'https://twitter.com/i/flow/login');
  closestHelper_func(clicked, '.apple', 'https://www.icloud.com/');

  if (clicked.closest('.sign')) {
    signup_login.forEach(p => p.classList.toggle('hidden'));
    btn_signup_login.forEach(p => p.classList.toggle('hidden'));
    email.hidden = !email.hidden;
  }
});
