export default function getTime(){
  const TIME = document.querySelector('.time'),
    DATE = document.querySelector('.date');
    
  function showTime(){
    const date = new Date(),
      currentTime = date.toLocaleTimeString();

    TIME.textContent = `${currentTime}`;
    showDate();
    setTimeout(showTime, 1000);
  }

  function showDate(){
    const date = new Date(),
      options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      },
      currentDate = date.toLocaleDateString('en-US', options);

    DATE.textContent = `${currentDate}`;
  }
  showTime();
}