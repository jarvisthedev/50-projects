'use script';

const header = document.querySelector('.section--settings header');
const header_btns = document.querySelectorAll('.header .btn');
const fileds = document.querySelectorAll('.changing--field');

const accOverview = document.querySelector('.changing--field.account-overview');
const profileEdit = document.querySelector('.changing--field.profile-edit');
const passChange = document.querySelector('.changing--field.pass-change');
const notification = document.querySelector('.changing--field.notification');
const privacy = document.querySelector('.changing--field.privacy');
const creditCard = document.querySelector('.changing--field.credit-card');

header.addEventListener('click', e => {
  const clicked = e.target;

  if (clicked.classList.contains('btn--person')) return;

  header_btns.forEach(el => el.classList.remove('active-btn'));
  fileds.forEach(el => el.classList.add('hidden'));

  if (clicked.closest('.btn').classList.contains('btn'))
    clicked.closest('.btn').classList.add('active-btn');

  if (clicked.closest('.btn--overview')) accOverview.classList.remove('hidden');
  else if (clicked.closest('.btn--privacy')) privacy.classList.remove('hidden');
  else if (clicked.closest('.btn--card')) creditCard.classList.remove('hidden');
  else if (clicked.closest('.btn--prof-edit'))
    profileEdit.classList.remove('hidden');
  else if (clicked.closest('.btn--password'))
    passChange.classList.remove('hidden');
  else if (clicked.closest('.btn--notification'))
    notification.classList.remove('hidden');
});
