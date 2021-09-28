export default function changeItemGallery(){
  
  function shuffle(arr) {
    return arr.sort((el) => Math.random() - 0.5);
  }
  const item = Array.from(
    document.querySelector('.gallery__wrapper').children
  );
  const items = document.querySelector('.gallery__wrapper');
  items.replaceChildren(...shuffle(item));

}