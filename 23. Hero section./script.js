const header = document.querySelector('.header');
const primaryText = document.querySelector('.primary-text');
const navDetail = document.querySelectorAll('.nav');

let dynamicImageUrl = './imgs/see-life.jpg';
let gradient =
  'linear-gradient(to right bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))';

header.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target;
  if (clicked.classList.contains('nav')) {
    if (clicked.classList.contains('sea')) {
      dynamicImageUrl = './imgs/see-life.jpg';
      primaryText.textContent = 'Sea Life';
    } else if (clicked.classList.contains('forest')) {
      dynamicImageUrl = './imgs/forest-dark.jpg';
      primaryText.textContent = 'Forest Life';
    } else if (clicked.classList.contains('skiing')) {
      dynamicImageUrl = './imgs/skiing1.jpg';
      primaryText.textContent = 'Skiing';
    } else if (clicked.classList.contains('biking')) {
      dynamicImageUrl = './imgs/biking.jpg';
      primaryText.textContent = 'Biking';
    } else if (clicked.classList.contains('golfing')) {
      dynamicImageUrl = './imgs/golf1.jpg';
      primaryText.textContent = 'Golfing';
    }
  }
  header.style.backgroundImage = `${gradient}, url("${dynamicImageUrl}")`;
});
