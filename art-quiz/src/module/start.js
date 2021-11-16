import { HOME_PAGE } from './addActive';

export function start() { setTimeout(()=>{
  const PRELOADER = document.getElementById('preloader');
  PRELOADER.classList.remove('active');
  HOME_PAGE.classList.add('active');
}, 1000) };

start();