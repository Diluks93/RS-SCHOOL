export default function getFormValidate() {
  
  let today = new Date().toISOString().split('T')[0];
  document.getElementsByName('date')[0].setAttribute('min', today);


}