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

function showClock() {
  if (!TIME.checked) {
    document.querySelector('.time').style.opacity = 1;
  } else {
    document.querySelector('.time').style.opacity = 0;
  }
};

function hideDate() {
  if (!DATE.checked) {
    document.querySelector('.date').style.opacity = 1;
  } else {
    document.querySelector('.date').style.opacity = 0;
  }
};

function showGreeting() {
  if (!GRT.checked) {
    document.querySelector('.greeting-container').style.opacity = 1;
  } else {
    document.querySelector('.greeting-container').style.opacity = 0;
  }
};

function showQuotes() {
  if (!QTS.checked) {
    document.querySelector('.quotes').style.opacity = 1;
  } else {
    document.querySelector('.quotes').style.opacity = 0;
  }
};

function showWeather() {
  if (!WTHR.checked) {
    document.querySelector('.weather').style.opacity = 1;
  } else {
    document.querySelector('.weather').style.opacity = 0;
  }
};

function showAudioplayer() {
  if (!PLR.checked) {
    document.querySelector('.player').style.opacity = 1;
  } else {
    document.querySelector('.player').style.opacity = 0;
  }
};

function showTodo() {
  if (!TD.checked) {
    document.querySelector('.todo-title').style.opacity = 1;
  } else {
    document.querySelector('.todo-title').style.opacity = 0;
  }
};

function showPomodoro() {
  if (!POMODORO.checked) {
    TIME.checked = false;
    DATE.checked = false;
    GRT.checked = false;
    QTS.checked = false;
    document.querySelector('.pomodoro').style.opacity = 0;
  } else {
    TIME.checked = true;
    DATE.checked = true;
    GRT.checked = true;
    QTS.checked = true;
    document.querySelector('.pomodoro').style.opacity = 1;
  }
};

function getTranslate(){
  AUDIO_PLAYER_BTN.textContent = greetingTranslation[LANG][8];
  document.querySelector('.color').textContent = greetingTranslation[LANG][10];
  document.querySelector('label[for=main]').textContent =
    greetingTranslation[LANG][11];
  document.querySelector('label[for=bg]').textContent =
    greetingTranslation[LANG][12];
  document.querySelector('label[for=text]').textContent =
    greetingTranslation[LANG][13];
  document.querySelector('.language').textContent =
    greetingTranslation[LANG][14];
  document.querySelector('.photo').textContent = greetingTranslation[LANG][15];
  document.querySelector('label[for=time]').textContent =
    greetingTranslation[LANG][16];
  document.querySelector('label[for=date]').textContent =
    greetingTranslation[LANG][17];
  document.querySelector('label[for=greeting]').textContent =
    greetingTranslation[LANG][18];
  document.querySelector('label[for=quotes]').textContent =
    greetingTranslation[LANG][19];
  document.querySelector('label[for=weather]').textContent =
    greetingTranslation[LANG][20];
  document.querySelector('label[for=audioplayer]').textContent =
    greetingTranslation[LANG][8];
  document.querySelector('#js-btn').textContent =
    greetingTranslation[LANG][21];
  document.querySelector('#js-short-break').textContent =
    greetingTranslation[LANG][22];
  document.querySelector('#js-long-break').textContent =
    greetingTranslation[LANG][23];
  document.querySelector('.empty-state__title').textContent =
    greetingTranslation[LANG][24];
  document.querySelector('.empty-state__description').textContent =
    greetingTranslation[LANG][25];
  document.querySelector('input[name=todos]').placeholder =
    greetingTranslation[LANG][26];
  getWeather();
}

COLORS.forEach(COLOR => {COLOR.addEventListener('change', changeColor)});
LANGUAGES.forEach(LANGUAGE => {LANGUAGE.
  addEventListener('change', () =>{
  changeLanguage();
  getTranslate()
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
TIME.addEventListener('change', showClock);
DATE.addEventListener('change', hideDate);
GRT.addEventListener('change', showGreeting);
QTS.addEventListener('change', showQuotes);
WTHR.addEventListener('change', showWeather);
PLR.addEventListener('change', showAudioplayer);
TD.addEventListener('change', showTodo);
POMODORO.addEventListener('change', () => {
  showPomodoro();
  showQuotes();
  showClock();
  hideDate();
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
  showClock,
  hideDate,
  showGreeting,
  showTodo,
  showAudioplayer,
  showWeather,
  changeBackground,
  changeLanguage,
  changeColor,
  getTranslate,
};