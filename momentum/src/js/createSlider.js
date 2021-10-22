import {getTimeOfDay} from './getGreeting.js'

const BODY = document.querySelector('body'),
  NEXT = document.querySelector('.slide-next'),
  PREV = document.querySelector('.slide-prev');

let num = getRandomNum(1, 20);

function checkTimeOfDay(){
  let timeOfDay = getTimeOfDay();
  switch (timeOfDay) {
    case 'afternoon':
    case 'день':
    case 'ы дзень':
      timeOfDay = 'day';
      break;
    case 'ой ночи':
    case 'анач':
      timeOfDay = 'night';
      break;
    case 'ое утро':
    case 'ай раніцы':
      timeOfDay = 'morning';
      break;
    case 'ый вечер':
    case 'ы вечар':
      timeOfDay = 'evening';
      break;
  }

  return timeOfDay;
}

function setBg(){
  let img = new Image();
  if(typeof num !== 'string') num = 10;
  let timeOfDay = checkTimeOfDay();
  let string = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/assets/images/${timeOfDay}/${num}.webp`;
    img.src = string;
    img.onload = () => {
      BODY.style.backgroundImage = `url(${string})`;
    }
  setTimeout(getSlideNext, 5000);
}

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSlideNext(){
  num++;  
  if (num === 21) num = 1;
  num = num.toString().padStart(2, '0');
  setBg();

  return num;
}

function getSlidePrev(){
  num--;  
  if (num === 0) num = 20;
  num = num.toString().padStart(2, '0');
  setBg();

  return num;
}

NEXT.addEventListener('click', getSlideNext);
PREV.addEventListener('click', getSlidePrev);

export { setBg, getRandomNum };