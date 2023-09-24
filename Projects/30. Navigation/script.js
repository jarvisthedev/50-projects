const sectionHead = document.querySelector('.header');
const sectionHero = document.querySelector('.section-hero');
const navList = document.querySelector('.nav-list');

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') navList.classList.add('hidden');
});

sectionHead.addEventListener('mouseover', function (e) {
  e.preventDefault();
  const parentHover = e.target.closest('.parent-header-hover');
  const hoverState = e.target.closest('.hover-state');
  if (hoverState) hoverState.classList.add('inner-list');
  if (parentHover)
    parentHover.querySelector('.nav-hover-detail').classList.remove('hidden');
});

sectionHead.addEventListener('mouseout', function (e) {
  e.preventDefault();
  const parentHover = e.target.closest('.parent-header-hover');
  const hoverState = e.target.closest('.hover-state');
  if (hoverState) hoverState.classList.remove('inner-list');
  if (parentHover)
    parentHover.querySelector('.nav-hover-detail').classList.add('hidden');
});

sectionHero.addEventListener('click', function (e) {
  navList.classList.add('hidden');
});

sectionHead.addEventListener('click', function (e) {
  if (e.target.classList.contains('logo')) navList.classList.remove('hidden');
});

navList.addEventListener('click', function (e) {
  if (e.target.classList.contains('sec-link')) navList.classList.add('hidden');
});
