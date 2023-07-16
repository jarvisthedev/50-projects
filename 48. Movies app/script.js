`use strict`;

const section__upcoming = document.querySelector(
  '.section-upcoming .inner-container'
);

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '606b3edfc9msh4127624d4fba9b7p1cdaa7jsn9cb81f18937a',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

const mostPopular_list = async options => {
  const most_popular_URL =
    'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=GB&purchaseCountry=US&currentCountry=US';
  try {
    const response = await fetch(most_popular_URL, options);
    const result = await response.json();

    array = result
      .filter((_, i) => i < 20)
      .map(el => el.replace('/title/', ''))
      .map(el => el.replace('/', ''));

    console.log(array);
    return array;
  } catch (error) {
    console.error(error);
  }
};

const id = 'tt4154756';

const metaData = async (options, id) => {
  const metaData_URL = `https://imdb8.p.rapidapi.com/title/get-meta-data?ids=${id}&region=US`;

  try {
    const response = await fetch(metaData_URL);
    const { [id]: movieData } = await response.json();

    if (!movieData) {
      return;
      options;
    }

    const movie_rating = movieData.ratings.rating;
    const movie_releaseYear = movieData.ratings.year;
    const movie_title = movieData.ratings.title;
    const movie_imgUrl = movieData.title.image.url;
    const movie_duration = movieData.title.runningTimeInMinutes;
    const movie_cert = movieData.certificate;

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
    // section__upcoming.innerHTML = ``;
    section__upcoming.insertAdjacentHTML('afterbegin', html);
  } catch (error) {
    console.error(error);
  }
};

mostPopular_list(options);
//metaData(options, id);

const mapping_section__upcoming = async () => {
  section__upcoming.innerHTML = ``;

  const movieList = fetch(
    'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=GB&purchaseCountry=US&currentCountry=US',
    options
  )
    .then(response => response.json())
    .then(listIds => {
      const array = listIds
        .filter((_, i) => i < 20)
        .map(el => el.replace('/title/', ''))
        .map(el => el.replace('/', ''));

      displayMetadata(array, 0);
      //setTimeout(() => displayMetadata(array, 5), 2000);
    })
    .catch(console.error);

  // const data = movieList.map(el => {
  //   metaData(options, el);
  // });

  // console.log(movieList);
  // console.log(data);
  return movieList;
};

const displayMetadata = (array, start) => {
  for (const id of array.slice(start, start + 5)) {
    metaData(options, id);
  }
};

mapping_section__upcoming();
