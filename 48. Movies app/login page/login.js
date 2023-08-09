`use script`;

const sectionSign = document.querySelector('.section--signInForm');

const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const checkPassword = password => {
  const paswd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (paswd.test(password.value)) return true;
  else {
    alert('Use correct password format');
    return false;
  }
};

const validateEmail = email => {
  const mail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value.match(mail)) return true;
  else alert('Must be a valid email');
};

const showAlert = (message, duration) => {
  const alertBox = document.createElement('div');
  alertBox.className = 'custom-alert';
  alertBox.textContent = message;
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.style.opacity = '0';
    setTimeout(() => document.body.removeChild(alertBox), 1000);
  }, duration);
};

// showAlert('Login success', 3000);

sectionSign.addEventListener('click', e => {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.closest('.sigh-up')) {
    if (username && validateEmail(email) && checkPassword(password)) {
      window.location.href = `../index.html`;
      showAlert('Login success', 3000);
    }
  }
  if (clicked.closest('.google'))
    window.location.href = ' https://accounts.google.com/o/oauth2/auth/';

  if (clicked.closest('.facebook'))
    window.location.href = `https://web.facebook.com/login/?_rdc=1&_rdr`;

  if (clicked.closest('.twitter'))
    window.location.href = `https://twitter.com/i/flow/login`;

  if (clicked.closest('.apple'))
    window.location.href = `https://www.icloud.com/`;
});
