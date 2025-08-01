let calculation = localStorage.getItem('calculation') || '';

displayResult();

function press(value) {
  calculation+= value;
  saveToStorage();
  displayResult();
};

function displayResult() {
  document.querySelector('.js-result')
    .innerHTML = calculation;
};

function saveToStorage() {
  localStorage.setItem('calculation',calculation);
};

function performEquals() {
  calculation= eval(calculation);
  saveToStorage();
  displayResult();
};

function clearResult() {
  calculation= '';
  saveToStorage();
  displayResult();
};

function clearLast() {
  const operators = [' * ', ' / ', ' + ', ' - '];
  if (operators.includes(calculation.slice(-3))) {
    calculation = calculation.slice(0, -3);
  } else {
    calculation = calculation.slice(0, -1);
  }

  saveToStorage();
  displayResult();
};

const buttons = [
  ['.js-7-button', '7'],
  ['.js-8-button', '8'],
  ['.js-9-button', '9'],
  ['.js-x-button', ' * '],
  ['.js-4-button', '4'],
  ['.js-5-button', '5'],
  ['.js-6-button', '6'],
  ['.js-minus-button', ' - '],
  ['.js-1-button', '1'],
  ['.js-2-button', '2'],
  ['.js-3-button', '3'],
  ['.js-add-button', ' + '],
  ['.js-divide-button', ' / '],
  ['.js-0-button', '0'],
  ['.js-point-button', '.'],
];

buttons.forEach(([selector, value]) => {
  document.querySelector(selector)
    .addEventListener('click', () => {
      press(value);
    });
});

document.querySelector('.js-equals-button')
  .addEventListener('click', () => {
    performEquals();
  });

document.querySelector('.js-clear-button')
  .addEventListener('click', () => {
    clearResult();
  });

document.querySelector('.js-back-button')
  .addEventListener('click', () => {
    clearLast();
  });

document.body.addEventListener('keydown', (event) => {
  buttons.forEach(([_, value]) => {
    if (event.key === value.trim() || event.key === value) {
      press(value);
    }  
  });

  if (event.key === 'Enter' || event.key === '=') {
      performEquals();
    } else if (event.key === 'c') {
      clearResult();
    } else if (event.key === 'Backspace') {
      clearLast();
    }
});