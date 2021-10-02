export default function showSidepanel() {
  const hamburger = document.querySelector('.hamburger'),
    sidepanel = document.querySelector('.sidepanel'),
    welcomeBlock = document.querySelector('.welcome__wrapper'),
    welcomeSection = document.querySelector('.welcome__container');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    sidepanel.classList.toggle('show');
    welcomeBlock.classList.toggle('hide');
  });

  window.onclick = function (event) {
    if (event.target == welcomeSection) {
      sidepanel.classList.remove('show');
      hamburger.classList.remove('hamburger_active');
      welcomeBlock.classList.remove('hide');
    }
  };
};
