export default function addRipple(){
  
  const button = document.getElementById('submit');
  let ripple;
  
  button.addEventListener('click', (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;
    ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    button.prepend(ripple);
  });
  
}

