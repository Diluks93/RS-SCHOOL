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

// function setBg(){
//   let img = new Image();
//   if(typeof num !== 'string') num = 10;
//   let timeOfDay = checkTimeOfDay();
//   let string = `https://raw.githubusercontent.com/Diluks93/stage1-tasks/assets/images/${timeOfDay}/${num}.webp`;
//     img.src = string;
//     img.onload = () => {
//       BODY.style.backgroundImage = `url(${string})`;
//     }
//   setTimeout(getSlideNext, 5000);
// }

async function getLinkToImageUnsplash() {
  let timeOfDay = checkTimeOfDay();
  let img = new Image();
  const url =
    `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=ZbU_eUZ1Awpdf0cKgjD_1ZsZ72zRBfUTlkW516emWag`;
  const res = await fetch(url);
  const data = await res.json();
  img.src = data.urls.regular;
  img.onload = () => {
    BODY.style.backgroundImage = `url(${data.urls.regular})`;
  };
  setTimeout(getSlideNext, 72000);
}

// async function getLinkToImageFlickr() {
//   let timeOfDay = checkTimeOfDay();
//   let img = new Image();
//   const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=de95f1f528e787b36321dc4a8604ad75&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
//   const res = await fetch(url);
//   const data = await res.json();
//   img.src = data.photos.photo[Math.ceil(Math.random() * 100)].url_l;
//   img.onload = () => {
//     BODY.style.backgroundImage = `url(${
//       data.photos.photo[Math.ceil(Math.random() * 100)].url_l
//     })`;
//   };
//   setTimeout(getSlideNext, 72000);
// }

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSlideNext(){
  num++;
  if (num === 21) num = 1;
  num = num.toString().padStart(2, '0');
  //setBg();
  getLinkToImageUnsplash();
  // getLinkToImageFlickr();
  return num;
}

function getSlidePrev(){
  num--;
  if (num === 0) num = 20;
  num = num.toString().padStart(2, '0');
  //setBg();
  getLinkToImageUnsplash();
  // getLinkToImageFlickr();
  return num;
}

NEXT.addEventListener('click', getSlideNext);
PREV.addEventListener('click', getSlidePrev);

export { getLinkToImageUnsplash /*setBg*/ /*getLinkToImageFlickr*/, getRandomNum };