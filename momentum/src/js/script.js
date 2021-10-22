import { showTime, showDate } from './getTime.js';
import { getHours, getTimeOfDay, setLocalStorage, getLocalStorage } from './getGreeting.js';
import { getLinkToImageUnsplash /*setBg*/ /* getLinkToImageFlickr */ } from './createSlider.js';
import { getWeather } from './vidjetWether.js';
import { getQuotes } from './getQuotes.js'
import { playAudio, pauseAudio } from './player.js'

const LANG = document.querySelector('html').getAttribute('lang');

showTime();
showDate();
getHours();
getTimeOfDay();
//setBg();
getLinkToImageUnsplash();
//getLinkToImageFlickr();
getWeather();
getQuotes();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
document.addEventListener('DOMContentLoaded', getWeather);

export {LANG}