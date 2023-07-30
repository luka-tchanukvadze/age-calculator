function findElementByClassName(className) {
  return document.querySelector(`.${className}`);
}

const day = findElementByClassName('day');
const month = findElementByClassName('month');
const year = findElementByClassName('year');

const yearResult = findElementByClassName('year-result');
const monthResult = findElementByClassName('month-result');
const dayResult = findElementByClassName('day-result');

const emptyDay = findElementByClassName('empty-day');
const emptyMonth = findElementByClassName('empty-month');
const emptyYear = findElementByClassName('empty-year');

const invalidDay = findElementByClassName('invalid-day');
const invalidMonth = findElementByClassName('invalid-month');
const invalidYear = findElementByClassName('invalid-year');

const dayLabel = findElementByClassName('day-label')
const monthLabel = findElementByClassName('month-label')
const yearLabel = findElementByClassName('year-label')

const submit = findElementByClassName('for-img')

function isInputEmpty(inputValue) {
  let trimmedValue = inputValue.trim()
  return trimmedValue === ''
}

function error(element, myClass, label) {
  console.log('element.value:', element.value);
  console.log('label:', label)
  if (isInputEmpty(element.value)) {
    myClass.style.display = 'block'
    element.classList.add('error-input')
    label.classList.add('red-label')
  } else {
    myClass.style.display = 'none'
    element.classList.remove('error-input')
    label.classList.remove('red-label')
  }
}

function validateInputs() {
  error(day, emptyDay, dayLabel);
  error(month, emptyMonth, monthLabel);
  error(year, emptyYear, yearLabel);

  // Additional validation logic can be added here

  // Example: Validate day, month, and year ranges (e.g., 1-31, 1-12, 1900-2099)
  const dayValue = parseInt(day.value, 10);
  const monthValue = parseInt(month.value, 10);
  const yearValue = parseInt(year.value, 10);

  if (dayValue < 1 || dayValue > 31) {
    invalidDay.style.display = 'block'
    day.classList.add('error-input');
    dayLabel.classList.add('red-label')
  } else {
    invalidDay.style.display = 'none'
    day.classList.remove('error-input')
    dayLabel.classList.remove('red-label')
  }

  if (monthValue < 1 || monthValue > 12) {
    invalidMonth.style.display = 'block'
    month.classList.add('error-input')
    monthLabel.classList.add('red-label')
  } else {
    invalidMonth.style.display = 'none'
    month.classList.remove('error-input')
    monthLabel.classList.remove('red-label')
  }

  if (yearValue < 1900 || yearValue > 2099) {
    invalidYear.style.display = 'block'
    year.classList.add('error-input')
    yearLabel.classList.add('red-label')
  } else {
    invalidYear.style.display = 'none';
    year.classList.remove('error-input')
    yearLabel.classList.remove('red-label')
  }
}


submit.addEventListener('click', () => {
  validateInputs()
})

