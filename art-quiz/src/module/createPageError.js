import { addActive, removeActive } from './addActive';
import { CARDS, ERROR, HOME_PAGE, SECTIONS } from './variables';

window.addEventListener('hashchange', () => {
  let array = getArraySectionsName();
  array.push('', 'round1')

  if (array.some((elem) => elem === window.location.hash.slice(1))) {

  } else {
    removeActive();
    ERROR.innerHTML = `
      <h2>This pages not found!</h2>
      <a href="#">Back home page!</a>
    `;
    ERROR.classList.add('active')
  }
  addActive(document.querySelectorAll('a[href="#"]'), HOME_PAGE);
  CARDS.innerHTML = '';
});

export function getArraySectionsName(){
  let sectionArray = [];
  
  for(let section of SECTIONS) {
    let classSection = section.className;

    if (classSection.indexOf(' ') !== -1) {
      let classNameSections = classSection.slice(0, classSection.indexOf(' '));
      sectionArray.push(classNameSections);
    } else 
        sectionArray.push(section.className);
  }

  return sectionArray.slice(2);
};

function addElementsArraySection(array = getArraySectionsName()){
  for(let i = 1; i < 13; i++) {
    array.push(`round${i}`)
  }
  return array;
}