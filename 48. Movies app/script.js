`use strict`;

const container__upcoming = document.querySelector('.upcoming_container');
const container__topRated = document.querySelector('.toprated_container');
const container__tvSeries = document.querySelector('.series_container');
const topArr__nav = document.querySelector('.top-nav-arrow');

const header = document.querySelector('.header');
const footer = document.querySelector('footer');
const section__hero = document.querySelector('.section--hero');
const section__upcoming = document.querySelector('.section-upcoming');
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

const navigateTopPage = () => {
  const heightUsed = 650;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > heightUsed) topArr__nav.style.opacity = 1;
    else topArr__nav.style.opacity = 0;
  });
};
navigateTopPage();

pricing__mothlyYearly.addEventListener('change', () => {
  const monthlyYearly = document.querySelectorAll('.prices');

  if (pricing__mothlyYearly.checked)
    monthlyYearly.forEach(el => (el.textContent = Number(el.textContent * 12)));
  else
    monthlyYearly.forEach(el => (el.textContent = Number(el.textContent / 12)));
});
