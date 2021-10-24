import {getTimeOfDay} from './getGreeting.js';
import {isUnsplash,
  isGithub,
  isFlickr} from './setting.js';

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
};

function setBg(value){
  let img = new Image();
  img.src = value;
  img.onload = () => {
    BODY.style.backgroundImage = `url(${value})`;
  }

  setTimeout(getSlideNext, 150000);
};

async function getLinkToImage(){
  let timeOfDay = checkTimeOfDay(),
    value;

  if (isGithub) {
    if (typeof num !== 'string') num = 10;
    let timeOfDay = checkTimeOfDay();
    value = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/assets/images/${timeOfDay}/${num}.webp`;
  } else if (isUnsplash){
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=ZbU_eUZ1Awpdf0cKgjD_1ZsZ72zRBfUTlkW516emWag`,
      res = await fetch(url),
      data = await res.json();

    value = data.urls.regular;
  } else if (isFlickr){
    const url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=de95f1f528e787b36321dc4a8604ad75&gallery_id=72157715186109466&extras=url_h&format=json&nojsoncallback=1`,
      res = await fetch(url),
      data = await res.json();

    value = data.photos.photo[getRandomNum(1, 400)].url_h;
  }

  setBg(value)
};

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getSlideNext(){
  num++;
  if (num === 21) num = 1;
  num = num.toString().padStart(2, '0');
  getLinkToImage();

  return num;
};

function getSlidePrev(){
  num--;
  if (num === 0) num = 20;
  num = num.toString().padStart(2, '0');
  getLinkToImage();

  return num;
};

NEXT.addEventListener('click', getSlideNext);
PREV.addEventListener('click', getSlidePrev);

export { getLinkToImage, getRandomNum };