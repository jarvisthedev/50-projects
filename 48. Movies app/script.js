`use strict`;

const container__upcoming = document.querySelector(".upcoming_container");
const container__topRated = document.querySelector(".toprated_container");
const container__tvSeries = document.querySelector(".series_container");
const topArr__nav = document.querySelector(".top-nav-arrow");
const btn__pricing = document.querySelectorAll(".btn--pricing");

const header = document.querySelector(".header");
const main = document.querySelector(`main`);
const footer = document.querySelector("footer");
const video = document.querySelector("video");
let movies_Array = [];

const section__hero = document.querySelector(".section--hero");
const section__upcoming = document.querySelector(".section-upcoming");
const section__highlight = document.querySelector(".section--movie-highlight");
const section__topRated = document.querySelector(".section--toprated");
const section__tvSeries = document.querySelector(".section--series");
const section__pricing = document.querySelector(".section-pricing");

const nav = document.querySelector(".header--top .nav");

const pricing__mothlyYearly = document.querySelector(".toggle-checkbox");

// HELPER FUNCTIONS
// 1.
const smoothScroll_helper = (clicked, class_list, scroll_to) => {
  if (clicked.classList.contains(class_list))
    scroll_to.scrollIntoView({
      behavior: "smooth",
    });
};

const hide_showTopNavArrow = () => {
  const heightUsed = 650;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > heightUsed) topArr__nav.style.opacity = 1;
    else topArr__nav.style.opacity = 0;
  });
};

hide_showTopNavArrow();

btn__pricing.forEach((el) =>
  el.addEventListener(
    "click",
    () => (window.location.href = "./login page/login.html")
  )
);

const rendering_Movie = (movies, section) => {
  section.innerHTML = ``;

  movies.map((movie) => {
    const movie_imgUrl = movie.imgUrl;
    const movie_imgUrl_webp = movie.imgUrl_webp;
    const movie_title = movie.title;
    const movie_releaseYear = movie.releaseYear;
    const movie_cert = movie.quality;
    const movie_duration = movie.duration;
    const movie_rating = movie.rating;
    const movie_id = movie.movie_id;

    const html = `
        <div class="upcoming--movie movie--id" id='${movie_id}'>
            <div role="img" aria-label="movie-cover-photo" class="img-holder">
              <picture>
                <source srcset="${movie_imgUrl_webp}" type="image/webp" />
                <source srcset="${movie_imgUrl}" type="image/png" />

                <img src="${movie_imgUrl}" alt="${movie_title} cover photo" />
              </picture>
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
    section.insertAdjacentHTML("beforeend", html);
  });
};

const rendering_section_highlight = async (movie) => {
  try {
    const html = `
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
            ${movie.genre.split(",").map((el) => `<span>${el}</span>`)}
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
      `;

    section__highlight.innerHTML = `
      <div class="container grid">
        <div class="video">
          <video hidden controls id="videoPlayer">
              <source src="./video/trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div id="player"></div>
        </div>
      </div>
      `;

    section__highlight
      .querySelector(".container")
      .insertAdjacentHTML("afterbegin", html);
    vivid = movie.trailer;
  } catch (error) {
    console.error(error);
  }
};

const mappingAPI_Data = async () => {
  try {
    const response = await fetch("data.json");
    const [data, top_rated, best_tv_series] = await response.json();
    movies_Array = [...data, ...top_rated, ...best_tv_series];

    rendering_Movie(data, container__upcoming);
    rendering_Movie(top_rated, container__topRated);
    rendering_Movie(best_tv_series, container__tvSeries);
  } catch (error) {
    console.error(error);
  }
};

mappingAPI_Data();

// ////////////////////////////////////
//  EVENT LISTENERS
// ////////////////////////////////////
// 1.
topArr__nav.addEventListener("click", (e) => {
  header.scrollIntoView({
    behavior: "smooth",
  });
});

// 2.
header.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.classList.contains("btn-signin"))
    window.location.href = "./login page/login.html";

  smoothScroll_helper(clicked, "tv-show", section__topRated);
  smoothScroll_helper(clicked, "tv-series", section__tvSeries);
  smoothScroll_helper(clicked, "pricing", section__pricing);
  smoothScroll_helper(clicked, "movie", section__upcoming);

  nav.classList.add("hidden");
  if (clicked.closest(".menu-btns")) nav.classList.remove("hidden");
});

// 3.
section__hero.addEventListener("click", (e) => nav.classList.add("hidden"));

// 4.
section__highlight.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.closest(".btn-watch-now")) playThisVideo(vivid);

  // DOWNLOADING VIDEO
  // 1.
  const getFileNameFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  // DOWNLOADING VIDEO
  // 2.
  if (clicked.closest(".btn-download")) {
    const videoUrl = video.currentSrc;
    const fileName = getFileNameFromUrl(videoUrl);

    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});

// 5.
main.addEventListener("click", (e) => {
  const clicked = e.target;
  const element = clicked.closest(".movie--id");
  if (!element) return;

  const movie__id = element.id;
  const movieclicked = movies_Array.find(
    (movie) => movie.movie_id === movie__id
  );
  rendering_section_highlight(movieclicked);

  section__highlight.classList.remove("hidden");
  section__highlight.scrollIntoView({
    behavior: "smooth",
  });
});

// 6.
footer.addEventListener("click", (e) => {
  const clicked = e.target;

  smoothScroll_helper(clicked, "tv-show", section__topRated);
  smoothScroll_helper(clicked, "tv-series", section__tvSeries);
  smoothScroll_helper(clicked, "pricing", section__pricing);
  smoothScroll_helper(clicked, "movie", section__upcoming);
});

// 7.
pricing__mothlyYearly.addEventListener("change", () => {
  const monthlyYearly = document.querySelectorAll(".prices");
  const offer = document.querySelector(".offer");
  offer.classList.toggle("visible");

  const updatePrices = (newPrices) =>
    monthlyYearly.forEach((priceElement, index) => {
      priceElement.textContent = newPrices[index];
    });

  if (pricing__mothlyYearly.checked) updatePrices([999, 2999, 3499]);
  else updatePrices([99, 299, 499]);
});

// ////////////////////////////////////
// LOGIC TO PLAYING YOUTUBE VIDEO
// ////////////////////////////////////
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  console.log("Youtube is ready");
}

//
function onPlayerReady(event) {
  event.target.playVideo();
}

//
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

//
function stopVideo() {
  player.stopVideo();
}

//
let player;
function playThisVideo(vivid) {
  const playerContainer = document.querySelector(".video");
  const containerWidth = playerContainer.offsetWidth;

  // Adjust dimensions based on container width
  const playerHeight = (containerWidth / 16) * 9;
  const playerWidth = containerWidth;

  if (player) player.destroy();

  player = new YT.Player("player", {
    height: playerHeight,
    width: playerWidth,
    videoId: vivid,
    playerVars: {
      playersinline: 1,
      autoplay: 0,
      controls: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// RESIZING IFRAME VIDEO --> RESPONSIVENESS
window.addEventListener("resize", () => {
  if (player) return;
  const playerContainer = document.querySelector(".video");
  const containerWidth = playerContainer.offsetWidth;

  const playerHeight = (containerWidth / 16) * 9;
  const playerWidth = containerWidth;

  player.setSize(playerWidth, playerHeight);
});

// HADNINGLIG FORMS

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Sucessfully subscribed"))
    .catch((error) => alert(error));

  document.querySelector(".email-input").value = "";
};

document
  .querySelector(".email-holder")
  .addEventListener("submit", handleSubmit);
