import { showTime, showDate } from './getTime.js';
import { getHours, getTimeOfDay, setLocalStorage, getLocalStorage } from './getGreeting.js'

showTime();
showDate();
getHours();
getTimeOfDay();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);