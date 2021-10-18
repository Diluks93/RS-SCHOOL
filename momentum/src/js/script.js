import { showTime, showDate } from './getTime.js';
import { getHours, getTimeOfDay, setLocalStorage, getLocalStorage } from './getGreeting.js';
import { setBg } from './createSlider.js';
import { getWeather } from './vidjetWether.js';
import { getQuotes } from './getQuotes.js'

showTime();
showDate();
getHours();
getTimeOfDay();
setBg();
getWeather();
getQuotes();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
document.addEventListener('DOMContentLoaded', getWeather);
