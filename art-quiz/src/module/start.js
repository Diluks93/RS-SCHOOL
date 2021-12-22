import { createCards } from './createPageCards';
import { templateQuiz } from './createPageQuestions';
import { FOOTER, H1, HEADER, HOME_PAGE, PRELOADER, QUIZ } from './variables';

window.addEventListener('hashchange', () => {
  const valueHash = window.location.hash.slice(1);
  localStorage.setItem('hash', valueHash);
});

export function start() { setTimeout(() => {
  const arrayHtmlElements = [H1, HEADER, FOOTER, QUIZ];
  let currentSection;

  if (localStorage.getItem('hash')) {
    currentSection =
      document.querySelector(`.${localStorage.getItem('hash')}`);
  };
  // todo calling function for each round
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

  if(currentSection === undefined) {
    arrayHtmlElements.push(HOME_PAGE);
  } else {
    arrayHtmlElements.push(currentSection);
  } 

  arrayHtmlElements.forEach((elem) => {
    if(elem) elem.classList.add('active');
  });
}, 1000) };

start();