export default function activitySectionGallery(){
  function changeItemGallery(){
    
    function shuffle(arr) {
      return arr.sort((el) => Math.random() - 0.5);
    }
    const item = Array.from(
      document.querySelector('.gallery__wrapper').children
    );
    const items = document.querySelector('.gallery__wrapper');
    items.replaceChildren(...shuffle(item));
  
  }
  changeItemGallery()

  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function(){
      let context = this, args = arguments;
      let later = function(){
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  function showItems() {
    const SLIDERIMAGES = document.querySelectorAll('.gallery__img');

    function checkSlide(e) {
      SLIDERIMAGES.forEach(image => {
        // scroll way through the image
        const slideInAt =
          window.scrollY + window.innerHeight - +/\d+/.exec(image.height) / 2;
        // bottom ob the image
        const imageBottom = image.offsetTop + +/\d+/.exec(image.height) + 3900;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
          image.classList.remove('active')
        } else {
          image.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll',debounce(checkSlide), 100)
  }

  showItems();
}
