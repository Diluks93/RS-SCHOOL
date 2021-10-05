export default function showSidepanel() {
  const hamburger = document.querySelector('.hamburger'),
    sidepanel = document.querySelector('.sidepanel'),
    welcomeBlock = document.querySelector('.welcome__wrapper'),
    welcomeSection = document.querySelector('.welcome');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    if (sidepanel.classList.contains('to-left')) {
      sidepanel.classList.remove('to-left');
      sidepanel.classList.add('to-right');
    } else {
      sidepanel.classList.add('to-left');
      sidepanel.classList.remove('to-right');
    }

    sidepanel.classList.toggle('show');

    if (welcomeBlock.classList.contains('hide')) {
      welcomeBlock.classList.remove('hide');
      welcomeBlock.classList.add('visible');
    } else {
      welcomeBlock.classList.add('hide');
      welcomeBlock.classList.remove('visible');
    }
  });
  
  welcomeSection.onclick = function (event) {
    if (event.target !== welcomeSection) {
      sidepanel.classList.remove('show');
      hamburger.classList.remove('hamburger_active');
      welcomeBlock.classList.remove('hide');
    }
  };
};
