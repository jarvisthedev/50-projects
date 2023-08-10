`use strict`;

const container__upcoming = document.querySelector('.upcoming_container');
const container__topRated = document.querySelector('.toprated_container');
const container__tvSeries = document.querySelector('.series_container');
const topArr__nav = document.querySelector('.top-nav-arrow');

const header = document.querySelector('.header');
const footer = document.querySelector('footer');
const video = document.querySelector('video');

const section__hero = document.querySelector('.section--hero');
const section__upcoming = document.querySelector('.section-upcoming');
const section__highlight = document.querySelector('.section--movie-highlight');
const section__topRated = document.querySelector('.section--toprated');
const section__tvSeries = document.querySelector('.section--series');
const section__pricing = document.querySelector('.section-pricing');

const nav = document.querySelector('.header--top .nav');
const movieInput = document.querySelector('.movie-input');
const close__icon = document.querySelector(`ion-icon[name='close-outline']`);
const search__icon = document.querySelector(`ion-icon[name='search-outline']`);

const pricing__mothlyYearly = document.querySelector('.toggle-checkbox');

const rendering_Movie = (movies, section) => {
  section.innerHTML = ``;

  movies.map(movie => {
    const movie_imgUrl = movie.imgUrl;
    const movie_title = movie.title;
    const movie_releaseYear = movie.releaseYear;
    const movie_cert = movie.quality;
    const movie_duration = movie.duration;
    const movie_rating = movie.rating;

    const html = `
        <div class="upcoming--movie">
            <div role="img" aria-label="movie-cover-photo" class="img-holder">
            <img src="${movie_imgUrl}" alt="${movie_title} cover photo" />
            </div>
            <div class="upcoming-details">
            <div class="name-date">
                <h3 class="tetiary-text--1">${movie_title}</h3>
                <p class="release-year">${movie_releaseYear}</p>
            </div>
            <div class="download-duration">
                <button class="btn btn--small btn-video-quality">${movie_cert}</button>
                <div class="duration-rating">
                <p class="upcoming-duration">
                    <ion-icon name="time-outline"></ion-icon>
                    <span class="duration-time">${movie_duration} min</span>
                </p>
                <p class="upcoming-duration">
                    <ion-icon name="star"></ion-icon>
                    <span class="upcoming-rating">${movie_rating}</span>
                </p>
                </div>
            </div>
            </div>
        </div>
        `;
    section.insertAdjacentHTML('beforeend', html);
  });
};

const rendering_section_highlight = async () => {
  try {
    const response = await fetch('data.json');
    // const [data, top_rated, best_tv_series] = await response.json();
    const [movieDetail] = await response.json();
    const movie = movieDetail[0];
    console.log(movie);
    // console.log(movie.genre.split(',').map(el => `<span>${el}</span>`));

    const html = `
      <section class="section--movie-highlight">
        <div class="container grid">
          <div role="img" aria-label="highlight-movie-cover" class="img-holder">
            <img
              src="${movie.imgUrl}"
              alt="${movie.title}"
            />
          </div>
          <div class="movie-hightlight-details">
            <p class="h1-intro">New Episodes</p>
            <h1 class="primary-text">${movie.title}</h1>
            <div class="hero-movie-details">
              <div class="btns">
                <button class="btn btn--small btn-pg">pg 13</button>
                <button class="btn btn--small btn-hd">${movie.quality}</button>
              </div>

              <p class="hero-movie-type">
              ${movie.genre.split(',').map(el => `<span>el</span>`)}
              </p>
              <div class="time-duration">
                <p class="hero-movie-date">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span class="release-date">${movie.releaseYear}</span>
                </p>
                <p class="hero-movie-duration">
                  <ion-icon name="time-outline"></ion-icon>
                  <span class="duration">${movie.duration} min</span>
                </p>
              </div>
            </div>
            <p class="hightlight-description">
              ${movie.synopsis}
            </p>

            <div class="share-watch grid grid-template--3">
              <p class="share">
                <ion-icon name="share-social"></ion-icon>
                <span>Share</span>
              </p>
              <p class="prime-text">
                <span class="text">Prime Video</span>
                <span>Streaming Channels</span>
              </p>
              <button class="btn btn--big btn-watch-now">
                <ion-icon name="play-outline"></ion-icon>
                <span>watch now</span>
              </button>
            </div>
          </div>
          <button class="btn btn--big btn-download">
            <span>download</span>
            <ion-icon name="download-outline"></ion-icon>
          </button>
          <div class="video">
            <video hidden controls>
              <source src="${movie.trailer}" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>`;
  } catch (error) {
    console.error(error);
  }
};

rendering_section_highlight();

const mappingAPI_Data = async () => {
  try {
    const response = await fetch('data.json');
    const [data, top_rated, best_tv_series] = await response.json();

    rendering_Movie(data, container__upcoming);
    rendering_Movie(top_rated, container__topRated);
    rendering_Movie(best_tv_series, container__tvSeries);
  } catch (error) {
    console.error(error);
  }
};

mappingAPI_Data();

header.addEventListener('click', e => {
  const clicked = e.target;

  nav.classList.add('hidden');

  if (clicked === search__icon) {
    movieInput.classList.add('visible');
    header.classList.add('search-nav');
  }

  if (clicked === close__icon) {
    movieInput.classList.remove('visible');
    header.classList.remove('search-nav');
  }

  if (clicked.classList.contains('tv-show'))
    section__topRated.scrollIntoView({
      behavior: 'smooth',
    });

  if (clicked.classList.contains('tv-series'))
    section__tvSeries.scrollIntoView({
      behavior: 'smooth',
    });

  if (clicked.classList.contains('pricing'))
    section__pricing.scrollIntoView({
      behavior: 'smooth',
    });

  if (clicked.classList.contains('movie'))
    section__upcoming.scrollIntoView({
      behavior: 'smooth',
    });

  if (clicked.classList.contains('btn-signin'))
    window.location.href = './login page/login.html';

  if (clicked.closest('.menu-btns')) nav.classList.remove('hidden');
});

section__hero.addEventListener('click', e => {
  nav.classList.add('hidden');
  const clicked = e.target;

  if (clicked.closest('.btn-watch-now'))
    section__highlight.scrollIntoView({
      behavior: 'smooth',
    });
});

section__highlight.addEventListener('click', e => {
  const clicked = e.target;

  if (clicked.closest('.btn-watch-now'))
    video.scrollIntoView({
      behavior: 'smooth',
    });

  const getFileNameFromUrl = url => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  if (clicked.closest('.btn-download')) {
    video.scrollIntoView({
      behavior: 'smooth',
    });

    const videoUrl = video.currentSrc;
    const fileName = getFileNameFromUrl(videoUrl);
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = fileName;
    document.body.appendChild(link);

    // Simulate a click event to trigger the download
    link.click();

    // Clean up the temporary link element
    document.body.removeChild(link);
  }
});

footer.addEventListener('click', e => {
  const clicked = e.target;
  if (clicked.classList.contains('tv-show'))
    section__topRated.scrollIntoView({
      behavior: 'smooth',
    });

  if (clicked.classList.contains('tv-series'))
    section__tvSeries.scrollIntoView({
      behavior: 'smooth',
    });

  if (clicked.classList.contains('pricing'))
    section__pricing.scrollIntoView({
      behavior: 'smooth',
    });

  if (clicked.classList.contains('movie'))
    section__upcoming.scrollIntoView({
      behavior: 'smooth',
    });
});

topArr__nav.addEventListener('click', e => {
  header.scrollIntoView({
    behavior: 'smooth',
  });
});

const hide_showTopNavArrow = () => {
  const heightUsed = 650;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > heightUsed) topArr__nav.style.opacity = 1;
    else topArr__nav.style.opacity = 0;
  });
};
hide_showTopNavArrow();

pricing__mothlyYearly.addEventListener('change', () => {
  const monthlyYearly = document.querySelectorAll('.prices');
  const offer = document.querySelector('.offer');
  offer.classList.toggle('visible');

  const updatePrices = newPrices =>
    monthlyYearly.forEach((priceElement, index) => {
      priceElement.textContent = newPrices[index];
    });

  if (pricing__mothlyYearly.checked) updatePrices([999, 2999, 3499]);
  else updatePrices([99, 299, 499]);
});

// ////////////////////////////////////
// playing video from youtube
// ////////////////////////////////////

let player;

function onYouTubeIframeAPIReady() {
  const playerContainer = document.querySelector('.video');
  const containerWidth = playerContainer.offsetWidth;

  // Adjust dimensions based on container width
  const playerHeight = (containerWidth / 16) * 9; // 16:9 aspect ratio
  const playerWidth = containerWidth;

  player = new YT.Player('player', {
    height: playerHeight,
    width: playerWidth,
    videoId: 'oMSdFM12hOw',
    playerVars: {
      autoplay: 0,
    },
  });
}

// Update player dimensions on window resize
window.addEventListener('resize', () => {
  if (player) {
    const playerContainer = document.querySelector('.video');
    const containerWidth = playerContainer.offsetWidth;

    const playerHeight = (containerWidth / 16) * 9; // 16:9 aspect ratio
    const playerWidth = containerWidth;

    player.setSize(playerWidth, playerHeight);
  }
});
