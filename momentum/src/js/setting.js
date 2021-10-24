//import {LANG} from './script.js';
import { getQuotes } from './getQuotes.js';
import {AUDIO_PLAYER_BTN} from './player.js'
import {
  greetingTranslation,
  setLocalStorage,
  getLocalStorage,
} from './getGreeting.js';
import {getWeather} from './vidjetWether.js'
import { getLinkToImage } from './createSlider.js';

const SETTING_BTN = document.querySelector('.settings-btn'),
  HEAD = document.querySelector('head'),
  COLORS = document.querySelectorAll('input[type="color"]'),
  INPUTS = document.querySelectorAll('input');

let LANG = 'en',
  isUnsplash = false,
  isGithub = false,
  isFlickr = true;

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
  let languageRu = INPUTS[7],
    languageBy = INPUTS[8],
    languageEn = INPUTS[9];
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
}

function changeBackground() {
  let photoGH = INPUTS[10],
    photoU = INPUTS[11],
    photoF = INPUTS[12];
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
}

function showTime() {
  let time = INPUTS[13];
  if (!time.checked) {
    document.querySelector('.time').style.opacity = 0;
  } else {
    document.querySelector('.time').style.opacity = 1;
  }
}

function showDate() {
  let date = INPUTS[14];
  if (!date.checked) {
    document.querySelector('.date').style.opacity = 0;
  } else {
    document.querySelector('.date').style.opacity = 1;
  }
}

function showGreeting() {
  let greeting = INPUTS[15];
  if (!greeting.checked) {
    document.querySelector('.greeting-container').style.opacity = 0;
  } else {
    document.querySelector('.greeting-container').style.opacity = 1;
  }
}

function showQuotes() {
  let quotes = INPUTS[16];
  if (!quotes.checked) {
    document.querySelector('.quotes').style.opacity = 0;
  } else {
    document.querySelector('.quotes').style.opacity = 1;
  }
}

function showWeather() {
  let weather = INPUTS[17];
  if (!weather.checked) {
    document.querySelector('.weather').style.opacity = 0;
  } else {
    document.querySelector('.weather').style.opacity = 1;
  }
}

function showAudioplayer() {
  let audioplayer = INPUTS[18];
  if (!audioplayer.checked) {
    document.querySelector('.player').style.opacity = 0;
  } else {
    document.querySelector('.player').style.opacity = 1;
  }
}

COLORS.forEach(COLOR => {COLOR.addEventListener('change', changeColor)});

//todo происходит очистка всего хранилища, надо, чтобы введенные значения пользователя оставались, наверно условие

INPUTS.forEach(INPUT => INPUT.addEventListener('click', ()=>{
  changeLanguage();
  getQuotes();
  AUDIO_PLAYER_BTN.textContent = greetingTranslation[LANG][8];
  localStorage.clear();
  setLocalStorage();
  getWeather()
  getLocalStorage();
  changeBackground();
  getLinkToImage();
  showTime();
  showDate();
  showGreeting();
  showQuotes();
  showWeather();
  showAudioplayer();
}))

SETTING_BTN.addEventListener('click', () => {
  document.querySelector('.setting').classList.toggle('open');
});

export { SETTING_BTN, LANG, isUnsplash, isGithub, isFlickr };