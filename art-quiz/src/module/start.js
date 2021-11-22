import { createCards } from './createPageCards';
import { templateQuiz } from './createPageQuestions';
import { FOOTER, H1, HEADER, HOME_PAGE, PRELOADER, QUIZ } from './variables';

window.addEventListener('hashchange', () => {
  localStorage.setItem('hash', window.location.hash.slice(1));
});

export function start() { setTimeout(() => {
  let array = [H1, HEADER, FOOTER, QUIZ],
    ELEMENT;

  if (localStorage.getItem('hash')) {
    ELEMENT =
      document.querySelector(`.${localStorage.getItem('hash')}`);
  };

  switch(localStorage.getItem('hash')) {
    case ('categories'): createCards();
      break;
    case(`round1`): 
    case(`round2`): 
    case(`round3`): 
    case(`round4`): 
    case(`round5`): 
    case(`round6`): 
    case(`round7`): 
    case(`round8`): 
    case(`round9`): 
    case(`round10`): 
    case(`round11`): 
    case(`round12`): (QUIZ.innerHTML='', templateQuiz());
      break;
    };

  PRELOADER.classList.remove('active');

  ELEMENT === undefined ? array.push(HOME_PAGE) : array.push(ELEMENT);

  array.forEach((elem) => {
    if(elem) elem.classList.add('active');
  });
}, 1000) };

start();