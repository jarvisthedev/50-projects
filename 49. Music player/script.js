`use strict`;

// CREATING THE UI CIRCULAR PROGRESS BAR
(() => {
  const progressBar = document.querySelector('.container--1 .img-holder');
  for (let i = 0; i < 100; i++) {
    let span = document.createElement('span');
    span.style.setProperty('--i', i);
    progressBar.append(span);
  }
})();

const img_container__1 = document.querySelector('.container--1 img');
const trackNam = document.querySelector('.container--1 h1');
const trackArtist = document.querySelector('.artist');
const img_container__2 = document.querySelector('.currently-playing img');
const trackName = document.querySelector('.song-play span');
const trackDescription = document.querySelector('.song-description');
const trackRelease = document.querySelector('.date-release span');

const hidden_container = document.querySelector('.container--3');
const section = document.querySelectorAll('section');
const sectionLibrary = document.querySelector('.section--library');
const sectionPlay = document.querySelector('.section-player');
const rangeSlider = document.querySelector('.range-slider .slider');
const btns = document.querySelector('.btns');
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
const user_play = document.querySelector('.play');
const user_pause = document.querySelector('.pause');
const user_playnxt = document.querySelector('.playnxt');
const user_repeat = document.querySelector('.repeat');

let display = 'block';
let music_no = 0;
let number_of_songs = 0;
let random_number_state = false;
let tracks_array = [];

// HEADER NAV FUNCTIONALITY
header.addEventListener('click', function (e) {
  const clicked = e.target;
  const navParent = clicked.closest('.nav-detail');

  if (navParent) {
    navDetails.forEach(el => el.classList.remove('active-page'));
    navParent.classList.add('active-page');

    if (navParent.classList.contains('header-library')) {
      section.forEach(el => el.classList.add('hidden'));
      sectionLibrary.classList.remove('hidden');
      sectionPlay.classList.add('hidden');
    } else if (navParent.classList.contains('header-play')) {
      section.forEach(el => el.classList.add('hidden'));
      sectionLibrary.classList.add('hidden');
      sectionPlay.classList.remove('hidden');
    }
  }
});

const playRandom_music = () => Math.floor(Math.random() * number_of_songs + 1);

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

list_span.forEach((el, i) => {
  el.addEventListener('click', () => {
    list_span.forEach(e => e.classList.remove('active'));
    for (k = 0; k <= i; k++) list_span[k].classList.add('active');

    const time_go = (i * audio.duration) / 100;
    audio.currentTime = time_go;
  });
});

btns.addEventListener('click', function (e) {
  btn_close.classList.toggle('hidden');
  btn_menu.classList.toggle('hidden');

  hidden_container.style.display = display;
  display = display === 'none' ? 'block' : 'none';
});

const update_track_UI = songs => {
  const track = songs[music_no];

  img_container__1.src = track.img_url;
  trackNam.textContent = track.name;
  trackArtist.textContent = track.artist;
  img_container__2.src = track.img_url;
  trackName.textContent = track.name;
  trackDescription.textContent = `${track.name} by ${track.artist}  is a single and has one track(s)`;
  trackRelease.textContent = `21/07/2022`;

  audio.src = `${track.track}`;
  update_audio_track();
};

// 1.
const musicAPI_Data = async () => {
  const res = await fetch('music.json');
  const tracks = await res.json();

  update_track_UI(tracks);
  number_of_songs = tracks.length - 1;
  tracks_array = [...tracks];
};

musicAPI_Data();

// 2.
music_controls.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target;

  if (clicked.classList.contains('pause_play')) {
    if (clicked === user_play) audio.play();
    else audio.pause();

    user_pause.classList.toggle('hidden');
    clicked.classList.toggle('hidden');
  }

  if (clicked.classList.contains('nxt_prev')) {
    if (clicked === user_playnxt) music_no += 1;
    else music_no -= 1;

    if (music_no > number_of_songs) music_no = 1;
    else if (music_no < 0) music_no = number_of_songs;

    music_no = random_number_state ? playRandom_music() : music_no;

    update_track_UI(tracks_array);

    update_audio_track();
    audio.play();

    user_pause.classList.remove('hidden');
    user_play.classList.add('hidden');
    list_span.forEach(el => el.classList.remove('active'));
  }

  if (clicked.classList.contains('rep_shuf')) {
    if (clicked === user_shuffle)
      random_number_state = random_number_state ? false : true;
  }
});

// 3.
const update_audio_track = () => {
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
      list_span.forEach(el => el.classList.remove('active'));
      user_play.classList.add('hidden');
      user_pause.classList.remove('hidden');
      user_time_current.textContent = `0:00`;

      music_no += 1;
      rangeSlider.value = 0;
      music_no = random_number_state ? playRandom_music() : music_no;

      update_track_UI(tracks_array);
      update_audio_track();
      audio.play();
    }

    if (position < 100) list_span[position].classList.add('active');
  });
};

// REQUESTION DATA FROM AN API
const token =
  'BQD5anbgsYQN1zh0C7-NNQ4193ZPnMhemNmK3wbyIRc3FFplje5QPiT-aSXchNSGl5SlHf-bMi4bNflDYMmIK7vClE9y980Z5-LSAcqpZkD_feQQw8_Z7Dt6r1U2mecEtnZ0xcMzre_Be9ZGLNpKy1P87KDLRZOhHjJa3Q3WJvji0gnUUsioXqFQjXjV6qDf5EZGUmoqH8L8T3Azo3HSN2eQMd6Tt7kDFgpovP4bjtcH-xKWchVEc_CGwqNIQCEVYTbwViWbt-LD7MutDwuMYA2f';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks() {
  return (
    await fetchWebApi('v1/me/top/tracks?time_range=short_term&limit=5', 'GET')
  ).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

console.log(topTracks);

// up next songs
// similar artists
// Made for you
// New releases
// Playlist
// Date produced
//
