export default function calculateTickets(){

  const minuses = document.querySelectorAll('.minus'),
    pluses = document.querySelectorAll('.plus'),
    radiosCheckboxes = document.querySelectorAll('.radio'),
    totalPrice = document.querySelector('.tickets__box_total');

    let ticketsPrice = 0;

  const isCheckbox = () => {
    radiosCheckboxes.forEach(radioCheckbox => {
      if(radioCheckbox.checked){
        ticketsPrice = +radioCheckbox.value
      }
    })
  }
  
  const getTotalPrice = () => {
    let amountBasicValue = +document.getElementById('basic').value;
    let amountSeniorValue = +document.getElementById('senior').value;

    localStorage.setItem(
      'amountBasicValue',
      document.getElementById('basic').value
    );
    localStorage.setItem(
      'amountSeniorValue',
      document.getElementById('senior').value
    );
    
    let totalPriceValue = ticketsPrice * amountBasicValue + (ticketsPrice / 2) * amountSeniorValue
    totalPrice.innerText = `Total € ${totalPriceValue}`;

    localStorage.setItem('totalPrice', totalPriceValue.toString());
  }

  const mergeFunction = () => {
    isCheckbox();
    getTotalPrice();
  }

  radiosCheckboxes.forEach((radioCheckbox) =>
    radioCheckbox.addEventListener('click', function() {
      localStorage.setItem('ticketType', this.value);
      mergeFunction();
    })
  );
  minuses.forEach((minus) => minus.addEventListener('click', mergeFunction));
  pluses.forEach((plus) => plus.addEventListener('click', mergeFunction));

  if (
    localStorage.getItem('ticketType') &&
    localStorage.getItem('amountBasicValue') &&
    localStorage.getItem('amountSeniorValue') &&
    localStorage.getItem('totalPrice')
  ) {
    let iRadio = localStorage.getItem('ticketType');
    document
      .querySelector('input[name="radio"][value="' + iRadio + '"]')
      .setAttribute('checked', 'checked');

    let iBasic = localStorage.getItem('amountBasicValue');
    document.getElementById('basic').setAttribute('value', `${iBasic}`)
    let iSenior = localStorage.getItem('amountSeniorValue');
    document.getElementById('senior').setAttribute('value', `${iSenior}`)
    let iTotal = localStorage.getItem('totalPrice');
    totalPrice.innerText = `Total € ${iTotal}`;
  }
  
}



{/* <select id="fruit">
    <option value="0">1</option>
    <option value="1">2</option>
    <option value="2">3</option>
    <option value="3">4</option>
</select>

<script>
document.getElementById("fruit").onchange = function() {
    localStorage.setItem('fruit', document.getElementById("fruit").value);
}

if (localStorage.getItem('fruit')) {
    document.getElementById("fruit").options[localStorage.getItem('fruit')].selected = true;
}
</script> */}