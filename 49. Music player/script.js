`use strict`;

// CREATING THE UI CIRCULAR SPANS
(() => {
  const progressBar = document.querySelector('.container--1 .img-holder');
  for (i = 0; i < 100; i++) {
    let span = document.createElement('span');
    span.style.setProperty('--i', i);
    progressBar.append(span);
  }
})();

const hidden_container = document.querySelector('.container--3');
const section = document.querySelector('section');
const sectionLibrary = document.querySelector('.section--library');
const sectionPlay = document.querySelector('.section-player');
const rangeSlider = document.querySelector('.range-slider .slider');
const btns_menu = document.querySelector('.btns');
const btn_menu = document.querySelector('.btn-menu');
const btn_close = document.querySelector('.btn-close');

const header = document.querySelector('.header');
const navDetails = document.querySelectorAll('.nav-detail');
const audio = document.querySelector('audio');

const user_time_current = document.querySelector('.time_current');
const user_time_duration = document.querySelector('.time_duration');
const list_span = document.querySelectorAll('.img-holder span');

const music_controls = document.querySelector('.musci-controls');
const user_shuffle = document.querySelector('.shuffle');
const user_playback = document.querySelector('.playback');
const user_play = document.querySelector('.play');
const user_pause = document.querySelector('.pause');
const user_playnxt = document.querySelector('.playnxt');
const user_repeat = document.querySelector('.repeat');

let display = 'block';

// HEADER NAV FUNCTIONALITY
header.addEventListener('click', function (e) {
  const clicked = e.target;
  const navParent = clicked.closest('.nav-detail');

  if (navParent) {
    Array.from(navDetails).map(el => el.classList.remove('active-page'));
    navParent.classList.add('active-page');

    if (navParent.classList.contains('header-library')) {
      Array.from(section).map(el => el.classList.add('hidden'));
      sectionLibrary.classList.remove('hidden');
      sectionPlay.classList.add('hidden');
    } else if (navParent.classList.contains('header-play')) {
      Array.from(section).map(el => el.classList.add('hidden'));
      sectionLibrary.classList.add('hidden');
      sectionPlay.classList.remove('hidden');
    }
  }
});

// AUDIO TRACK CONTROLS
const timeFormat = time => {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor(time / 60);
  const second = Math.floor(time - minute * 60);

  return `${
    hour.toString().padStart(2, '0') === '00'
      ? ''
      : hour.toString().padStart(2, '0') + ':'
  }${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
};

audio.addEventListener(
  'loadedmetadata',
  () => (user_time_duration.textContent = timeFormat(audio.duration))
);

audio.addEventListener('timeupdate', () => {
  const time_duration = audio.duration;
  const time_current = audio.currentTime;
  const position = Math.floor((time_current * 100) / time_duration);
  user_time_current.textContent = timeFormat(time_current);
  rangeSlider.value = position;

  if (Math.floor(time_duration) === Math.floor(time_current)) {
    Array.from(list_span).map(el => el.classList.remove('active'));
    rangeSlider.value = 0;
    user_time_current.textContent = `0:00`;
    user_play.classList.remove('hidden');
    user_pause.classList.add('hidden');
  }

  if (position < 100) list_span[position].classList.add('active');
});

music_controls.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target;

  user_pause.classList.toggle('hidden');
  clicked.classList.toggle('hidden');
  if (clicked === user_play) audio.play();
  if (clicked === user_pause) audio.pause();
});

list_span.forEach((el, i) => {
  el.addEventListener('click', () => {
    list_span.forEach(e => e.classList.remove('active'));
    for (k = 0; k <= i; k++) list_span[k].classList.add('active');

    const time_go = (i * audio.duration) / 100;
    audio.currentTime = time_go;
  });
});

rangeSlider.addEventListener('click', e => {
  console.log(rangeSlider.value);
});

btns_menu.addEventListener('click', function (e) {
  btn_close.classList.toggle('hidden');
  btn_menu.classList.toggle('hidden');

  hidden_container.style.display = display;
  display = display === 'none' ? 'block' : 'none';
});
