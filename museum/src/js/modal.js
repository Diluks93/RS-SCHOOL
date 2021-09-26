export default function modal(){

  const btn = document.getElementById('btn'),
        modal = document.querySelector('.modal'),
        close = document.getElementById('close');

  btn.addEventListener('click', function () {
    modal.classList.toggle('open');
  });

  close.addEventListener('click', function () {
    modal.classList.toggle('open');
  });

}