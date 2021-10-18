import { showTime, showDate } from './getTime.js';
import { getHours, getTimeOfDay, setLocalStorage, getLocalStorage } from './getGreeting.js'
import { setBg } from './createSlider.js'

showTime();
showDate();
getHours();
getTimeOfDay();
setBg();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);