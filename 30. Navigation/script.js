const sectionHead = document.querySelector('.header');
const innerHover = document.querySelector('.hover-state');

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
