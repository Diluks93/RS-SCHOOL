export default function slider(){

  const prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    slides = document.querySelectorAll('.slide'),
    figures = document.querySelectorAll('.figure'),
    cubs = document.querySelectorAll('.cub'),
    cur = document.getElementById('current'),
    isEnabled = true;

  let index = 0,
    currentFigure = 0;

  const activeSlide = (n) => {
    for (let slide of slides) {
      slide.classList.remove('active');
    }
    slides[n].classList.add('active');
  };
  const activeBullet = (n) => {
    for (let cub of cubs) {
      cub.classList.remove('active');
    }
    cubs[n].classList.add('active');
  };
  const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeBullet(ind);
    cur.innerHTML = `0${ind + 1}`;
  };
  const nextSlide = () => {
    if (index === slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };
  const prevSlide = () => {
    if (index === 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };

  cubs.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);


  const nextFigure = () => {
    if (currentFigure === figures.length - 1) {
      currentFigure = 0;
      activeFigure(currentFigure);
    } else {
      currentFigure++;
      activeFigure(currentFigure);
    }
  };

  const activeFigure = (n) => {
    for (let figure of figures) {
      figure.classList.remove('active');
    }
    figures[n].classList.add('active');
  };

  setInterval(nextSlide, 5000);
  setInterval(nextFigure, 3000);

  const swipeMove = (el) => {
    let surface = el,
      startX = 0,
      startY = 0,
      distX = 0,
      distY = 0,
      startTime = 0,
      elapsedTime = 0;

    let threshold = 150,
      restraint = 100,
      allowedTime = 300;

    surface.addEventListener('mousedown', function(e){
      startX = e.pageX;
      startY = e.pageY;
      startTime = new Date().getTime();
      e.preventDefault()
    }, false);

    surface.addEventListener('mouseup', function(e) {
      distX = e.pageX - startX;
      distY = e.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if(elapsedTime <= allowedTime){
        if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
          if(distX > 0) {
            if (isEnabled) {
              prevSlide(index);
            }
          } else {
            if (isEnabled) {
              nextSlide(index);
            }
          }
        }
      }
      e.preventDefault();
    }, false)

    surface.addEventListener('touchstart', function(e){
      if (e.target.classList.contains('prev')){
        if(isEnabled) {
          prevSlide(index);
        }
      } else {
        if(isEnabled) {
          nextSlide(index);
        }
      }
      let touchobj = e.changedTouches[0];
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    }, false);

    surface.addEventListener('touchmove', function(e){
      e.preventDefault();
    }, false);

    surface.addEventListener('touchend', function(e){
      let touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX;
      distY = touchobj.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime){
        if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
          if(distX > 0){
            if(isEnabled){
              prevSlide(index);
            } 
          } else {
            if (isEnabled){
              nextSlide(index);
            }
          }
        }
      }
      e.preventDefault();
    }, false)
  }
  let el = document.getElementById('slider');
  swipeMove(el);
}