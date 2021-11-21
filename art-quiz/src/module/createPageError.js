import { addActive, ERROR, HOME_PAGE, removeActive, SECTIONS } from './addActive';

window.addEventListener('hashchange', () => {
  let array = getArraySectionsName();
  array.push('')

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