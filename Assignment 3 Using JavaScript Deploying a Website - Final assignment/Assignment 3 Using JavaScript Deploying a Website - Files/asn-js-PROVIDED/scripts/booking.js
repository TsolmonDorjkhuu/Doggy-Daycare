/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


const halfDayRate = 20;
const fullDayRate = 35;
let daysSelected = 0;

function updateTotalCost() {
  const costElement = document.getElementById('calculated-cost');
  costElement.textContent = daysSelected *
(document.getElementById('half').classList.contains('clicked') ?
halfDayRate : fullDayRate);
}

function toggleDay(day) {
  if (!day.classList.contains('clicked')) {
    day.classList.add('clicked');
    daysSelected++;
  } else {
    day.classList.remove('clicked');
    daysSelected--;
  }
  updateTotalCost();
}

function clearDays() {
  const days = document.querySelectorAll('.day-selector li');
  days.forEach(day => {
    day.classList.remove('clicked');
  });
  daysSelected = 0;
  updateTotalCost();
}

function setRate(rate) {
  const full = document.getElementById('full');
  const half = document.getElementById('half');
  if (rate === 'full') {
    full.classList.add('clicked');
    half.classList.remove('clicked');
  } else {
    half.classList.add('clicked');
    full.classList.remove('clicked');
  }
  updateTotalCost();
}

document.querySelectorAll('.day-selector li').forEach(day => {
  day.addEventListener('click', () => toggleDay(day));
});

document.getElementById('clear-button').addEventListener('click', clearDays);

document.getElementById('full').addEventListener('click', () =>
setRate('full'));
document.getElementById('half').addEventListener('click', () =>
setRate('half'));