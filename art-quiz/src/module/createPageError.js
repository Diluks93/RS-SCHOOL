import { addActive, removeActive } from './addActive';
import { CARDS, ERROR, HOME_PAGE, SECTIONS } from './variables';

window.addEventListener('hashchange', () => {
  let arraySectionsName = addElementsArraySection();
  arraySectionsName.push('', 'round1')

  if (arraySectionsName.some((sectionName) => sectionName === window.location.hash.slice(1))) {

  } else {
    removeActive();
    ERROR.innerHTML = `
      <h2>This pages not found!</h2>
      <a href="#">Back home page!</a>
    `;
    ERROR.classList.add('active')
    QUIZ.innerHTML = '';
  }
  addActive(document.querySelectorAll('a[href="#"]'), HOME_PAGE);
  CARDS.innerHTML = '';
});

export function getArraySectionsName(){
  const sectionArray = [];
  
  for(let section of SECTIONS) {
    const classSection = section.className;

    if (classSection.indexOf(' ') !== -1) {
      const classNameSections = classSection.slice(0, classSection.indexOf(' '));
      sectionArray.push(classNameSections);
    } else 
        sectionArray.push(section.className);
  }

  return sectionArray.slice(2);
};

function addElementsArraySection(arraySectionsName = getArraySectionsName()){
  const MAX_VALUE_ROUNDS = 12
  for(let i = 1; i <= MAX_VALUE_ROUNDS; i++) {
    arraySectionsName.push(`round${i}`)
  }
  return arraySectionsName;
}