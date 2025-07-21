let calculation = localStorage.getItem('Calculation') || '';

displayResult();

function press(value) {
  calculation += value;
  displayResult();
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('Calculation', calculation);
}

function displayResult() {
  document.querySelector('.js-result')
    .innerHTML = calculation;
}