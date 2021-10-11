export default function customVideoPlayer(){
//todo подумать над функциональным подходом, убрать лишние переменные и символы если они есть.

//give object
const 
  player = document.querySelector('.video__player'),
  video = document.querySelector('.video__video'),
  videos = document.querySelectorAll('.video__video'),
  play = document.getElementById('button'),
  toggle = document.querySelector('.toggle-play'),
  progress = document.getElementById('progress'),
  progressBar = document.getElementById('progress-filled'),
  volume = document.getElementById('volume'),
  mute = document.getElementById('mute'),
  fullscreen = document.getElementById('fullscreen'),
  dots = document.querySelectorAll('.video__dot'),
  items = document.querySelectorAll('.video__player .video__video');
  
  
let currentVideo = 0,
  isEnabled = true;

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

play.addEventListener('click', togglePlay)

videos.forEach( (video) => video.addEventListener('click', togglePlay) );
videos.forEach( (video) => video.addEventListener('play', updateButton) );
videos.forEach( (video) => video.addEventListener('pause', updateButton) );
videos.forEach( (video) => video.addEventListener('timeupdate', handleProgress) );

progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

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
      if (event.shiftKey) togglePlaybackRate(-0.25);
      break;
    case 'Period':
      if (event.shiftKey) togglePlaybackRate(0.25);
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

function changeVideo(num) {
  return video.paused ? currentVideo = num : currentVideo;
}

function changeCurrentItem(n) {
  currentVideo = (n + items.length) % items.length;
}

dots.forEach(dot => dot.addEventListener('click', function changeDot() {
  dots.forEach(dot => dot.classList.remove('active'))
  dot.classList.add('active');
  currentVideo = dot;
}))

function hideItem(direction) {
  isEnabled = false;
  items[currentVideo].classList.add(direction);
  items[currentVideo].addEventListener('animationend', function () {
    this.classList.remove('play', direction);
  });
}

function showItem(direction) {
  items[currentVideo].classList.add('next', direction);
  items[currentVideo].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('play');
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function () {
  if (isEnabled) {
    previousItem(currentVideo);
  }
});

document.querySelector('.control.right').addEventListener('click', function () {
  if (isEnabled) {
    nextItem(currentVideo);
  }
});

}