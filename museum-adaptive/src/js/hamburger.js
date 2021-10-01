export default function showSidepanel() {
  const hamburger = document.querySelector('.hamburger'),
    sidepanel = document.querySelector('.sidepanel'),
    welcomeBlock = document.querySelector('.welcome__wrapper');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    sidepanel.classList.toggle('show');
    welcomeBlock.classList.toggle('hide');
  });
};
