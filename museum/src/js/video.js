//todo подумать над функциональным подходом, убрать лишние переменные и символы если они есть.

//give object
const 
  player = document.querySelector('.video__player'),
  video = document.querySelector('.video__video'),
  videos = document.querySelectorAll('.video__video'),
  play = document.querySelector('button'),
  toggle = document.querySelector('.toggle-play'),
  progress = document.getElementById('progress'),
  progressBar = document.getElementById('progress-filled'),
  volume = document.getElementById('volume'),
  mute = document.getElementById('mute'),
  fullscreen = document.getElementById('fullscreen'),
  tabs = document.querySelector('.video__slider'),
  dots = document.querySelector('.video__dots');

let currentVideo = 0;

// change button play or pause
function togglePlay() {
  const playState = videos[currentVideo].paused ? 'play' : 'pause';
  videos[currentVideo][playState]();
}

function updateButton() {
  const togglePlayBtn = document.querySelector('.toggle-play');

  if(this.paused) {
    togglePlayBtn.innerHTML = `<svg class="icon"><use xlink:href="assets/svg/sprite.svg#playSmall"></use></svg>`;
    play.innerHTML = `<svg class="icon"><use xlink:href="assets/svg/sprite.svg#play"></use></svg>`;
  } else {
    togglePlayBtn.innerHTML = `<svg class="icon"><use xlink:href="assets/svg/sprite.svg#pause"></use></svg>`;
    play.innerHTML = ``;
  }
}

// interactive progress progress
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * videos[currentVideo].duration;
  videos[currentVideo].currentTime = scrubTime;
}

// interactive volume
function videoChangeVolume() {
  let vol = volume.value / 100; 
  videos[currentVideo].volume = vol;
}

function videoMute() {
  if (videos[currentVideo].volume === 0) {
    videos[currentVideo].volume = volume.value / 100;
    mute.innerHTML = `<svg class="icon"><use xlink:href="assets/svg/sprite.svg#sound"></use></svg>`;
    const value = volume.value;
    volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  } else {
    videos[currentVideo].volume = 0;
    mute.innerHTML = `<svg class="icon"><use xlink:href="assets/svg/sprite.svg#mute"></use></svg>`;
    const value = videos[currentVideo].volume;
    volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  }
}

function handleProgress() {
  const percent = (videos[currentVideo].currentTime / videos[currentVideo].duration) * 100;
  progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;
  progressBar.style.left = `${percent}%`;
}

function skip() {
  videos[currentVideo].currentTime += parseFloat(this.dataset.skip);
}

function toggleFullscreen() {
  const togglePlayBtn = document.querySelector('.toggle-fullscreen');
  if (!document.fullscreenElement) {
    player.requestFullscreen();
    togglePlayBtn.innerHTML = `<svg class="icon"><use xlink:href="assets/svg/sprite.svg#fullscreenExit"></use></svg>`;
  } else {
    document.exitFullscreen();
    togglePlayBtn.innerHTML = `<svg class="icon"><use xlink:href="assets/svg/sprite.svg#fullscreen"></use></svg>`;
  }
}

function togglePlaybackRate(value) {
  let next = video.playbackRate + value;
  if (next >= 0.25 && next <= 2) {
    videos[currentVideo].playbackRate = next;
  }
}

// Even Listener 'click'

fullscreen.addEventListener('click', toggleFullscreen);

videos.forEach( (video) => video.addEventListener('click', togglePlay) );
videos.forEach( (video) => video.addEventListener('play', updateButton) );
videos.forEach( (video) => video.addEventListener('pause', updateButton) );
videos.forEach( (video) => video.addEventListener('timeupdate', handleProgress) );

progress.addEventListener('click', scrub);
volume.addEventListener('change', videoChangeVolume);
mute.addEventListener('click', videoMute);

toggle.addEventListener('click', togglePlay);

// Even Listener keyboard
document.addEventListener('keyup', interactionKeyboard);

function interactionKeyboard(event) {
  switch(event.code) {
    case 'Space':
      togglePlay();
      break;
    case 'KeyM':
      videoMute();
      break;
    case 'KeyF':
      toggleFullscreen();
      break;
    case 'KeyJ':
      videos[currentVideo].currentTime -= 10;
      break;
    case 'KeyL':
      videos[currentVideo].currentTime += 10;
      break;
    case 'Comma':
      togglePlaybackRate(-0.25);
      break;
    case 'Period':
      togglePlaybackRate(0.25);
      break;
    case 'Digit0':
    case 'Digit1':
    case 'Digit2':
    case 'Digit3':
    case 'Digit4':
    case 'Digit5':
    case 'Digit6':
    case 'Digit7':
    case 'Digit8':
    case 'Digit9':
    case 'Numpad0':
    case 'Numpad1':
    case 'Numpad2':
    case 'Numpad3':
    case 'Numpad4':
    case 'Numpad5':
    case 'Numpad6':
    case 'Numpad7':
    case 'Numpad8':
    case 'Numpad9':
      if (isNaN(+event.key)) {
        break;
      }
      videos[currentVideo].currentTime =
        (videos[currentVideo].duration / 10) * +event.key;
      break;
  }
}

// interaction progress-bar and volume  
volume.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
});

// tabs // 

const changeClass = element => {
  for (let i = 1; i < dots.children.length - 1; i++) {
    dots.children[i].classList.remove('active');
  }
  element.classList.add('active');
};

tabs,dots.addEventListener('click', event => {
  const currentTab = event.target.dataset.btn;
  changeClass(event.target);
  for ( let i = 0; i < videos.length; i++) {
    videos[i].classList.remove('play');
    if (videos[i].dataset.content === currentTab) {
      videos[i].classList.add('play');
      changeVideo(i);
    }
  }
});

function changeVideo(num) {
  return video.paused ? currentVideo = num : currentVideo;
}