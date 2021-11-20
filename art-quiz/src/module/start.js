import { HOME_PAGE } from './addActive'

export function start() { setTimeout(()=>{
  const PRELOADER = document.getElementById('preloader'),
    HEADER = document.getElementById('header'),
    H1 = document.querySelector('h1'),
    FOOTER = document.querySelector('.footer');
  
    PRELOADER.classList.remove('active');
    [HOME_PAGE, H1, HEADER, FOOTER].forEach( elem => {
      elem.classList.add('active')
    })
}, 1000) };

start();