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
