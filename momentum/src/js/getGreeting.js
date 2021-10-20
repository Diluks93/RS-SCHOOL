import {CITY} from './vidjetWether.js'

const GREETING = document.querySelector('.greeting'),
  NAME = document.querySelector('.name');

function getHours(){
  const date = new Date(),
    hours = date.getHours();

  return hours;
}

function getTimeOfDay(){
  const hours = getHours();
  let timeOfDay =
    hours >= 0 && hours <= 5
      ? 'night'
      : hours >= 6 && hours <= 11
      ? 'morning'
      : hours >= 12 && hours <= 17
      ? 'afternoon'
      : hours >= 18 && hours <= 23 
      ? 'evening' 
      : null
  GREETING.textContent = `Good ${timeOfDay}`;

  return timeOfDay;
}

function setLocalStorage() {
  localStorage.setItem('name', NAME.value);
  if(!localStorage.getItem('city'))
    localStorage.setItem('city', 'Minsk');
  else
    localStorage.setItem('city', CITY.value);
}

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    NAME.value = localStorage.getItem('name');
  }
  if (localStorage.getItem('city')) {
    CITY.value = localStorage.getItem('city');
  }
}

export { getHours, getTimeOfDay, setLocalStorage, getLocalStorage };