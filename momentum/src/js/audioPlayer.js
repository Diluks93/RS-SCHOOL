import playList from './playList.js';


//todo volume progres не работает должным образом подключить прогресс бар и громкость из музея и костомизовать оттуда же


const BTNS = document.querySelectorAll('.play'),
  BTN_PREV = document.querySelector('.play-prev'),
  BTN_NEXT = document.querySelector('.play-next'),
  PLAYLIST_CONTAINER = document.querySelector('.play-list'),
  PROGRESS = document.querySelector('.progress'),
  DURATION = document.querySelector('.duration'),
  AUDIO_PLAYER_BTN = document.querySelector('.player-title'),
  AUDIO_PLAYER = document.querySelector('.audioplayer'),
  TIME_LINE = AUDIO_PLAYER.querySelector('.timeline'),
  PROGRESS_BAR = AUDIO_PLAYER.querySelector('.progress-bar'),
  PLAY_NAME = AUDIO_PLAYER.querySelector('.play-name'),
  VOLUME_SLIDER = AUDIO_PLAYER.querySelector('.volume-slider'),
  MUTE_BTN = document.querySelector('.audio-mute-false'),
  VOLUME_SCALE = document.querySelector('.audio-volume'),
  audio = new Audio();

let isPlay = false,
  playNum = 0,
  li;

function playAudio() {
  isPlay = true;
  audio.src = playList[playNum].src;
  DURATION.textContent = `${playList[playNum].duration}`;
  PLAY_NAME.textContent = playList[playNum].title;
  audio.currentTime = 0; 
  if(isPlay) audio.play();
}

function pauseAudio() {
  isPlay = false;
  if(!isPlay) audio.pause();
}

function toggleBtn() {
  BTNS.forEach(BTN => {BTN.classList.toggle('pause');})
  isPlay ? pauseAudio() : playAudio();
  PLAYLIST_CONTAINER.children[playNum].classList.add('item-active');
}

function checkPauseAudio(){
  if (BTNS[0 | 1].contains === 'pause') {
    BTNS[0 | 1].classList.remove('pause');
    pauseAudio();
  } else {
    BTNS[0 | 1].classList.add('pause');
    playAudio();
  }
}

function playPrev(){
  PLAYLIST_CONTAINER.children[playNum].classList.remove('item-active');
  playNum--;
  if (playNum < 0) playNum = playList.length - 1;
  checkPauseAudio();
  PLAYLIST_CONTAINER.children[playNum].classList.add('item-active');
}

function playNext(){
  PLAYLIST_CONTAINER.children[playNum].classList.remove('item-active');
  playNum++;
  if (playNum === playList.length) playNum = 0;
  checkPauseAudio();
  PLAYLIST_CONTAINER.children[playNum].classList.add('item-active');
}

playList.forEach(el => {
  li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = `${el.title}`;
  PLAYLIST_CONTAINER.append(li);
});

BTNS.forEach(BTN => BTN.addEventListener('click', () => {
  toggleBtn();
  setInterval(function() {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration);
        // CURRENT_TIME.textContent = `00:00\ `;
        PROGRESS.style.width = (audioTime * 100) / audioLength + '%';
    }, 1000)
}));

function audioChangeVolume() {
  let volume = volumeScale.value / 100;
  audio.volume = volume;
  if (audio.volume == 0) {
    MUTE_BTN.classList.remove('audio-mute-false');
    MUTE_BTN.classList.add('audio-mute');
  } else {
    MUTE_BTN.classList.remove('audio-mute');
    MUTE_BTN.classList.add('audio-mute-false');
  }
}

VOLUME_SCALE.addEventListener('change', audioChangeVolume);

MUTE_BTN.addEventListener('click', ()=> {
  audio.muted = !audio.muted;
  MUTE_BTN.classList.toggle('audio-mute')
})
BTN_PREV.addEventListener('click', playPrev);
BTN_NEXT.addEventListener('click', playNext);
AUDIO_PLAYER_BTN.addEventListener('click', () => {
  document.querySelector('.audioplayer').classList.toggle('open');
})
audio.addEventListener('ended', playNext);

export { playAudio, pauseAudio };

audio.addEventListener(
  "loadeddata",
  () => {
    AUDIO_PLAYER.querySelector('.duration-timer .duration').textContent =
      getTimeCodeFromNum(audio.duration);
    audio.volume = .75;
  },
  false
);

TIME_LINE.addEventListener(
  'click',
  (e) => {
    const timelineWidth = getComputedStyle(TIME_LINE).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

VOLUME_SLIDER.addEventListener(
  'click',
  (e) => {
    const sliderWidth = getComputedStyle(VOLUME_SLIDER).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    VOLUME_SCALE.style.width = newVolume * 100 + '%';
  },
  false
);

setInterval(() => {
  PROGRESS_BAR.style.width = (audio.currentTime / audio.duration) * 100 + '%';
  AUDIO_PLAYER.querySelector('.duration-timer .current').textContent =
    getTimeCodeFromNum(audio.currentTime);
}, 500);

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}