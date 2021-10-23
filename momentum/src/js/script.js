import { showTime, showDate } from './getTime.js';
import { getHours, getTimeOfDay, setLocalStorage, getLocalStorage } from './getGreeting.js';
import { getLinkToImage } from './createSlider.js';
import { getWeather } from './vidjetWether.js';
import { getQuotes } from './getQuotes.js'
import { playAudio, pauseAudio } from './player.js'

const LANG = document.querySelector('html').getAttribute('lang');

showTime();
showDate();
getHours();
getTimeOfDay();
getLinkToImage();
getWeather();
getQuotes();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
document.addEventListener('DOMContentLoaded', getWeather);

export {LANG}