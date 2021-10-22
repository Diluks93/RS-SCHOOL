import {getTimeOfDay} from './getGreeting.js'

const BODY = document.querySelector('body'),
  NEXT = document.querySelector('.slide-next'),
  PREV = document.querySelector('.slide-prev');

let num = getRandomNum(1, 20);

function setBg(){
  let timeOfDay = getTimeOfDay();
  let img = new Image();
  if(typeof num !== 'string') num = 10;
  if (timeOfDay === 'afternoon') timeOfDay = 'day';
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