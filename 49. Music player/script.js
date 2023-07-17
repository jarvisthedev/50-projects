`use strict`;

const container__upcoming = document.querySelector('.upcoming_container');
const container__topRated = document.querySelector('.toprated_container');
const container__tvSeries = document.querySelector('.series_container');

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
