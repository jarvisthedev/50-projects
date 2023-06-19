const review = document.querySelectorAll('.review');
let currentIndex = 0;

function displayTwoItems() {
  review.forEach(item => (item.style.display = 'none'));
  const endIndex = currentIndex + 2;

  for (let i = currentIndex; i < endIndex; i++) {
    const index = i % review.length;
    review[index].style.display = 'block';
  }
  currentIndex = (currentIndex + 1) % review.length;

  setTimeout(displayTwoItems, 1000 * 30);
}

displayTwoItems();
