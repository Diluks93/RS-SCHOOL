export default function slider(){

  const slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    cubs = document.querySelectorAll('.cub'),
    cur = document.getElementById('current');

  function slide(wrapper, items, prev, next) {
    let posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 300,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;

    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add('loaded');

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', function () {
      shiftSlide(-1);
    });
    next.addEventListener('click', function () {
      shiftSlide(1);
    });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
      e = e || window.event;
      e.preventDefault();
      posInitial = items.offsetLeft;

      if (e.type == 'touchstart') {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }

    function dragAction(e) {
      e = e || window.event;

      if (e.type == 'touchmove') {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }
      items.style.left = items.offsetLeft - posX2 + 'px';
    }

    function dragEnd(e) {
      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
        shiftSlide(1, 'drag');
      } else if (posFinal - posInitial > threshold) {
        shiftSlide(-1, 'drag');
      } else {
        items.style.left = posInitial + 'px';
      }

      document.onmouseup = null;
      document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
      items.classList.add('active');
      if (allowShift) {
        if (!action) {
          posInitial = items.offsetLeft;
        }
        if (dir == 1) {
          items.style.left = posInitial - slideSize + 'px';
          index++;
        } else if (dir == -1) {
          items.style.left = posInitial + slideSize + 'px';
          index--;
        }
      }
      allowShift = false;
    }
    
    function checkIndex() {
      items.classList.remove('active');
      if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + 'px';
        index = slidesLength - 1;
      }
      if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + 'px';
        index = 0;
      }
      activeBullet(index);
      cur.innerHTML = `0${index + 1}`;
      allowShift = true;
    }

    const activeBullet = (n) => {
      for (let cub of cubs) {
        cub.classList.remove('active');
      }
      cubs[n].classList.add('active');
    };

    cubs.forEach((item, indexDot) => {
      item.addEventListener('click', () => {
        index = indexDot;
        cur.innerHTML = `0${index + 1}`;
        activeBullet(index);
        switch(index){
          case(0):
            items.style.left = -1000 + 'px';
          break;
          case(1):
            items.style.left = -2000 + 'px';
          break;
          case(2):
            items.style.left = -3000 + 'px';
          break;
          case(3):
            items.style.left = -4000 + 'px';
          break;
          case(4):
            items.style.left = -5000 + 'px';
          break;
        }
      });
    });
  }

  slide(slider, sliderItems, prev, next);
}