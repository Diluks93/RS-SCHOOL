import { getQuotes } from './getQuotes.js';
import {AUDIO_PLAYER_BTN} from './player.js';
import {
  greetingTranslation,
  setLocalStorage,
  getLocalStorage,
  NAME
} from './getGreeting.js';
import {getWeather} from './vidjetWether.js';
import { getLinkToImage } from './createSlider.js';

const SETTING_BTN = document.querySelector('.settings-btn'),
  HEAD = document.querySelector('head'),
  COLORS = document.querySelectorAll('input[type="color"]'),
  LANGUAGES = document.querySelectorAll(
    'input[name=RU], input[name=BY], input[name=EN]'
  ),
  PHOTOS = document.querySelectorAll(
    'input[name=github], input[name=unsplash], input[name=flickr]'
  ),
  TIME = document.querySelector('input[name=time]'),
  DATE = document.querySelector('input[name=date]'),
  GRT = document.querySelector('input[name=greeting]'),
  QTS = document.querySelector('input[name=quotes]'),
  WTHR = document.querySelector('input[name=weather]'),
  PLR = document.querySelector('input[name=audioplayer]'),
  TD = document.querySelector('input[name=todo]'),
  POMODORO = document.querySelector('input[name=pomodoro]');

let LANG = 'en',
  isUnsplash = false,
  isGithub = true,
  isFlickr = false;

function changeColor() {
  let mainValue = COLORS[0].value,
    bgValue = COLORS[1].value,
    textValue = COLORS[2].value,
    STYLE = document.createElement('style'),
    variables = `:root{--main-color: ${mainValue}; --background-color: ${bgValue}; --text-color: ${textValue}`;
  STYLE.innerHTML = `${variables}`;
  HEAD.append(STYLE);
}

function changeLanguage () {
  let languageRu = LANGUAGES[0],
    languageBy = LANGUAGES[1],
    languageEn = LANGUAGES[2];
  if(languageEn.checked) {
    languageRu.checked = false;
    languageBy.checked = false;
    LANG = 'en';
  } else if (languageRu.checked) {
    languageEn.checked = false;
    languageBy.checked = false;
    LANG = 'ru';
  } else if (languageBy.checked) {
    languageEn.checked = false;
    languageRu.checked = false;
    LANG = 'by';
  }
  getQuotes();
};

function changeBackground() {
  let photoGH = PHOTOS[0],
    photoU = PHOTOS[1],
    photoF = PHOTOS[2];
  if (photoGH.checked) {
    photoU.checked = false;
    photoF.checked = false;
    isGithub = true;
    isFlickr = false;
    isUnsplash = false;
  } else if (photoU.checked) {
    photoGH.checked = false;
    photoF.checked = false;
    isGithub = false;
    isFlickr = false;
    isUnsplash = true;
  } else if (photoF.checked) {
    photoU.checked = false;
    photoGH.checked = false;
    isGithub = false;
    isFlickr = true;
    isUnsplash = false;
  }
};

function showTime() {
  if (!TIME.checked) {
    document.querySelector('.time').style.opacity = 0;
  } else {
    document.querySelector('.time').style.opacity = 1;
  }
};

function showDate() {
  if (!DATE.checked) {
    document.querySelector('.date').style.opacity = 0;
  } else {
    document.querySelector('.date').style.opacity = 1;
  }
};

function showGreeting() {
  if (!GRT.checked) {
    document.querySelector('.greeting-container').style.opacity = 0;
  } else {
    document.querySelector('.greeting-container').style.opacity = 1;
  }
};

function showQuotes() {
  if (!QTS.checked) {
    document.querySelector('.quotes').style.opacity = 0;
  } else {
    document.querySelector('.quotes').style.opacity = 1;
  }
};

function showWeather() {
  if (!WTHR.checked) {
    document.querySelector('.weather').style.opacity = 0;
  } else {
    document.querySelector('.weather').style.opacity = 1;
  }
};

function showAudioplayer() {
  if (!PLR.checked) {
    document.querySelector('.player').style.opacity = 0;
  } else {
    document.querySelector('.player').style.opacity = 1;
  }
};

function showTodo() {
  if (!TD.checked) {
    document.querySelector('.todo-title').style.opacity = 0;
  } else {
    document.querySelector('.todo-title').style.opacity = 1;
  }
};

function showPomodoro() {
  if (!POMODORO.checked) {
    TIME.checked = true;
    DATE.checked = true;
    GRT.checked = true;
    QTS.checked = true;
    document.querySelector('.pomodoro').style.opacity = 0;
  } else {
    TIME.checked = false;
    DATE.checked = false;
    GRT.checked = false;
    QTS.checked = false;
    document.querySelector('.pomodoro').style.opacity = 1;
  }
};

COLORS.forEach(COLOR => {COLOR.addEventListener('change', changeColor)});
LANGUAGES.forEach(LANGUAGE => {LANGUAGE.
  addEventListener('change', (event) =>{
    console.log(event.target)
  changeLanguage();
  AUDIO_PLAYER_BTN.textContent = greetingTranslation[LANG][8];
  getWeather();
  if (localStorage.getItem('name') !== greetingTranslation[LANG][6])
    localStorage.setItem('name', greetingTranslation[LANG][6]);
  else localStorage.setItem('name', NAME.value);
  NAME.placeholder = localStorage.getItem('name');
})});
PHOTOS.forEach(PHOTO => {PHOTO.addEventListener('change', (event) => {
  if(event.target.checked){
    changeBackground();
    getLinkToImage();
  }
})});
TIME.addEventListener('change', showTime);
DATE.addEventListener('change', showDate);
GRT.addEventListener('change', showGreeting);
QTS.addEventListener('change', showQuotes);
WTHR.addEventListener('change', showWeather);
PLR.addEventListener('change', showAudioplayer);
TD.addEventListener('change', showTodo);
POMODORO.addEventListener('change', () => {
  showPomodoro();
  showQuotes();
  showTime();
  showDate();
  showGreeting();
});

SETTING_BTN.addEventListener('click', () => {
  document.querySelector('.setting').classList.toggle('open');
});

export {
  SETTING_BTN,
  LANG,
  isUnsplash,
  isGithub,
  isFlickr,
  showPomodoro,
  showQuotes,
  showTime,
  showDate,
  showGreeting,
  showTodo,
  showAudioplayer,
  showWeather,
  changeBackground,
  changeLanguage,
  changeColor
};