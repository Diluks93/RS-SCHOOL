export default function comparisons(){
  const slider = document.querySelector('.explore__block.slider'),
    before = slider.querySelector('.explore__block_before'),
    beforeImage = before.querySelector('.explore__img'),
    change = slider.querySelector('.explore__block_change'),
    body = document.getElementById('explore');

  let isActive = false;

  document.addEventListener('DOMContentLoaded', () => {
    let width = slider.offsetWidth;
    beforeImage.getElementsByClassName.width = `${width}px`;
  });

  const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  body.addEventListener('mousedown', () => {
    isActive = true;
  }, {passive: true});

  body.addEventListener('mouseup', () => {
    isActive = false;
  }, {passive: true});

  body.addEventListener('mouseleave', () => {
    isActive = false;
  }, {passive: true});

  body.addEventListener('mousemove', (e) => {
    if (!isActive) return;

    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
  }, {passive: true});

  body.addEventListener('touchstart', () => {
    isActive = true;
  }, {passive: true});

  body.addEventListener('touchend', () => {
    isActive = false;
  }, {passive: true});

  body.addEventListener('touchcancel', () => {
    isActive = false;
  }, {passive: true});

  body.addEventListener('touchmove', (e) => {
    if (!isActive) return;

    let x, i;
    for (i = 0; e < e.length; i++) {
      x = e.changeTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
  }, {passive: true});
}
