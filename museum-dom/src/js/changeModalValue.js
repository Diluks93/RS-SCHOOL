export default function calculateModal(){

  const TIME = document.querySelector('.time-inp'),
    DATE = document.querySelector('.date-inp'),
    TICKET = document.getElementById('ticket'),
    BASICFORM = document.getElementById('basicform'),
    SENIORFORM = document.getElementById('seniorform'),
    BASICVALUE = document.querySelector('.basic'),
    SENIORVALUE = document.querySelector('.senior'),
    minuses = document.querySelectorAll('.minus'),
    pluses = document.querySelectorAll('.plus'),
    priceBasic = document.getElementById('priceBasic'),
    priceSenior = document.getElementById('priceSenior');

  const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','february','March','April','May','June','July','August','September','October','November','December'];

  function getStr(value, arr){
    let res = '';
    for (let i = 0; i < arr.length; i++) {
      if (value == i) return (res = arr[i]);
    }
  };

  TIME.addEventListener('change', (event) => {
    const result = document.getElementById('output-time');
    result.textContent = `${event.target.value}`
  });
  DATE.addEventListener('change', (event) => {
    const result = document.getElementById('output-date');
    const date = new Date(event.target.value),
      day = date.getDay(),
      month = date.getMonth(),
      dayMonth = date.getDate();

    let dayStr = getStr(day, week),
      monthStr = getStr(month, months);

    result.textContent = `${dayStr}, ${monthStr}, ${dayMonth}`;
  });
  let iType = 0;
  function checkTicketType(TICKET) {
    switch (TICKET.value) {
      case 'Permanent exhibition':
        iType = 20;
        break;
      case 'Temporary exhibition':
        iType = 25;
        break;
      case 'Combined admission':
        iType = 40;
        break;
    }
    return iType
  }

  TICKET.addEventListener('change', (event) =>{
    const result = document.getElementById('output-type-tickets');
    result.textContent = `${event.target.value}`;
    checkTicketType(event.target);
    BASICFORM.innerHTML = `Basic 18+ (${iType} &#8364;)`;
    SENIORFORM.innerHTML = `Senior 65+ (${iType / 2} &#8364;)`;
    document.getElementById(
      'numBasic'
    ).nextSibling.textContent = `Basic (${iType} €)`;
    document.getElementById(
      'numSenior'
    ).nextSibling.textContent = `Senior (${iType / 2} €)`;
  })
  function getOutputValue(){
    document.getElementById('numBasic').innerText = `${BASICVALUE.value}`;
    document.getElementById('numSenior').innerText = `${SENIORVALUE.value}`;
    priceBasic.innerText = `${BASICVALUE.value * iType} €`;
    priceSenior.innerText = `${SENIORVALUE.value * iType / 2} €`;
    document.querySelector('.total').innerText = `${
      BASICVALUE.value * iType + (SENIORVALUE.value * iType) / 2
    } €`;
  }
  minuses.forEach((minus) => minus.addEventListener('click', getOutputValue));
  pluses.forEach((plus) => plus.addEventListener('click', getOutputValue));
}
