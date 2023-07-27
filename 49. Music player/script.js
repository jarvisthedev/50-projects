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
const trackRelease_date = document.querySelector('.date-release span');

const hidden_container = document.querySelector('.container--3');
const section = document.querySelectorAll('section');
const sectionFeed = document.querySelector('.section--feed');
const sectionTrending = document.querySelector('.section--trending');
const sectionPlay = document.querySelector('.section-player');
const sectionFavourite = document.querySelector('.section--favourite');
const sectionLibrary = document.querySelector('.section--library');

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
    section.forEach(el => el.classList.add('hidden'));

    if (navParent.classList.contains('header-library'))
      sectionLibrary.classList.remove('hidden');
    else if (navParent.classList.contains('header-music-player'))
      sectionPlay.classList.remove('hidden');
    else if (navParent.classList.contains('header-feed'))
      sectionFeed.classList.remove('hidden');
    else if (navParent.classList.contains('header-trending'))
      sectionTrending.classList.remove('hidden');
    else if (navParent.classList.contains('header-favourite'))
      sectionFavourite.classList.remove('hidden');
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
  trackRelease_date.textContent = track.release_date;

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

// UNLOCK

// // REQUESTION DATA FROM AN API
// const token =
//   'BQCI2twJe1iEr_RsFzue_cUe6ZaVEpOLkLNr3d8LQy0KMMdq_CXCgrCgGmpcS_yBtKxCT3Kod8OCTfk0dQrhE-6N2qkbjgdIM-HExidL-_Z1T92rpRT4U_MS2nR8g_jmiwmouLBtz22nlN-M-BnISqoNLcXxv04CPpWWg5RKPOLIESKIbj3hG-xGOQdNoFyBrz3wfQYLiNejo6XlBZcB7jElCYA82fcNQ0cqbwxgw5awgFAtJBKz1Dik5sZVpL7oQpjRbgPTWaWo9NM_EN17iP6r';

// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// }

// async function getTopTracks() {
//   return (
//     await fetchWebApi('v1/me/top/tracks?time_range=short_term&limit=5', 'GET')
//   ).items;
// }

// const topTracksIds = [
//   '4T6bmYSQwupoWPbUQHp4lU',
//   '0TTOsyDKykWhCh3qDd9wMY',
//   '19z3b1aFR4hL3H6peU6cGm',
//   '2K7lwIM77amplCz8FCA0RA',
//   '35k0jeXz6vwKCasj2cRkSE',
// ];

// async function getRecommendations() {
//   return (
//     await fetchWebApi(
//       `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`,
//       'GET'
//     )
//   ).tracks;
// }

// const recommendedTracks = await getRecommendations();
// const recommendedTracks_1 = await getRecommendations();
// const recommendedTracks_2 = await getRecommendations();
// const recommendedTracks_3 = await getRecommendations();
// const topTracks = await getTopTracks();

// console.log(topTracks);
// console.log(
//   topTracks?.map(
//     ({ name, artists }) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );

// //
// //
// //
// console.log(recommendedTracks);
// console.log(recommendedTracks_1);
// console.log(recommendedTracks_2);
// console.log(recommendedTracks_3);
// console.log(
//   recommendedTracks.map(
//     ({ name, artists }) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );

// 1.
// TOP HIPHOP SONGS
// YOUR SHOWS
// SHOWS YOU MIGHT LIKE
// RECENTLY PLAYED
// MORE OF WHAT YOU LIKE
// YOUR TOP MIXES
// EDITORS PICKS
// POPULAR RADIO
// MADE FOR YOU
// TODAY'S BIGGEST HITS
// BEST OF ARTISTS
// RECOMMENDED RADIO
//
//
//

// 2.
// DISOVER MORE FROM
// FIREBOY

// DISOVER MORE FROM
// DAVIDO

// DISOVER MORE FROM
// REMA

// DISOVER MORE FROM
// EMINEM

// 3.
// POPULAR ALBUMS

// MORE LIKE
// ALWZ SNNY

// UNIQUELY YOURS
