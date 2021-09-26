const btn = document.getElementById('btn');
const modal = document.querySelector('.modal');

btn.addEventListener('click', function () {
  modal.classList.toggle('open');
});
