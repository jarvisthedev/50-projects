// CREATING THE UI CIRCULAR SPANS
(() => {
  const progressBar = document.querySelector('.progress');
  for (i = 0; i < 100; i++) {
    let span = document.createElement('span');
    span.style.setProperty('--i', i);
    progressBar.append(span);
  }
})();

const audio = document.querySelector('audio');
const play_pause = document.querySelector('.play_pause');
const duration = document.querySelector('.duration');
const current = document.querySelector('.currentTime_UI');
const list_span = document.querySelectorAll('.progress span');
const volume_span = document.querySelectorAll('.volume span');
const volumeBar = document.querySelector('.volume-bar');

const timeFormat = time => {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor(time / 60);
  const second = Math.floor(time - minute * 60);

  return `${
    hour.toString().padStart(2, '0') === '00'
      ? ''
      : hour.toString().padStart(2, '0') + ':'
  }${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
};

audio.addEventListener(
  'loadedmetadata',
  () => (duration.textContent = timeFormat(audio.duration))
);

play_pause.addEventListener('click', () => {
  let iBtn = document.querySelector('.play_pause i');

  if (audio.paused) {
    audio.play();
    iBtn.classList.replace('bx-play-circle', 'bx-pause-circle');
  } else {
    audio.pause();
    iBtn.classList.replace('bx-pause-circle', 'bx-play-circle');
  }
});

audio.addEventListener('timeupdate', () => {
  const time_duration = audio.duration;
  const time_current = audio.currentTime;
  const position = Math.floor((time_current * 100) / time_duration);
  current.textContent = timeFormat(time_current);

  if (Math.floor(time_duration) === Math.floor(time_current)) {
    let iBtn = document.querySelector('.play_pause i');
    iBtn.classList.replace('bx-play-circle', 'bx-pause-circle');
    list_span.forEach(el => el.classList.remove('active'));

    current.textContent = `0:00`;
  }

  list_span[position].classList.add('active');
});

volume_span.forEach(el => {
  el.addEventListener('click', e => {
    let volume = 0;

    if (el.classList.contains('volume-down')) volume = audio.volume - 0.1;
    else volume = audio.volume + 0.1;

    audio.volume = Math.min(1, Math.max(0, volume));

    const width = audio.volume * 100;
    volumeBar.style.width = `${width}%`;
  });
});

list_span.forEach((el, i) => {
  el.addEventListener('click', e => {
    list_span.forEach(e => e.classList.remove('active'));
    for (k = 0; k <= i; k++) list_span[k].classList.add('active');

    const time_go = (i * audio.duration) / 100;
    audio.currentTime = time_go;
  });
});
