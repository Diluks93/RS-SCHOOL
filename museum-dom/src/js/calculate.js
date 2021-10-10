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
      document.querySelector('.basic').setAttribute('value', `${iBasic}`)
      let iSenior = localStorage.getItem('amountSeniorValue');
      document.getElementById('senior').setAttribute('value', `${iSenior}`)
      document.querySelector('.senior').setAttribute('value', `${iSenior}`)
      let iTotal = localStorage.getItem('totalPrice');
      totalPrice.innerText = `Total € ${iTotal}`;
      document.querySelector('.form__offer').innerHTML = `
      <div>
        <p class="text"><span class="number" id="numBasic">${iBasic}</span>Basic (${iRadio} &#8364;)</p>
        <span class="price" id="priceBasic">${iRadio * iBasic} &#8364;</span>
      </div>
      <div>
        <p class="text"><span class="number" id="numSenior">${iSenior}</span>Senior (${iRadio / 2} &#8364;)</p>
        <span class="price" id="priceSenior">${(iRadio / 2) * iSenior} &#8364;</span>
      </div>
      <hr>
      <div class="form__offer">
        <span class="totalText">Total:</span><span class="total">${iTotal} &#8364;</span>
      </div>`;
    };
  radiosCheckboxes.forEach((radioCheckbox) =>
    radioCheckbox.addEventListener('click', function() {
      let result = document.getElementById('output-type-tickets');
      switch(this.value){
        case('20'):
          return result.innerText = `Permanent exhibition`;
        case('25'):
          return result.innerText = `Temporary exhibition`;
        case('40'):
          return result.innerText = `Combined admission`;
      }
    })
  );
}