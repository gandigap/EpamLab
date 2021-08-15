const minInputContainer = document.getElementById('minValue');
const maxInputContainer = document.getElementById('maxValue');
const buttonForRange = document.getElementById('buttonForRange');
const resultContainer = document.getElementById('result');
const dialogContainer = document.getElementById('dialog');
const dialogMessageContainer = document.getElementById('dialogMessage');
const ruleMessage = 'It is can be only integer. Example -123 or 32';

const memoizeRange = () => {
  let memo = {};
  return (min, max) => {
    let result;
    memo[min] = memo[min] || {};
    if (min in memo && max in memo[min]) {
      result = memo[min][max];
      console.log('memo');
    } else {
      result = min + ((max - min) * ((max + min + 1) / 2));
      memo[min][max] = result;
      console.log('count');
    }
    return result;
  }
}

const range = memoizeRange();

buttonForRange.addEventListener('click', () => {
  const minValueNumber = Number(minInputContainer.value);
  const maxValueNumber = Number(maxInputContainer.value);

  const rangeResult = range(minValueNumber, maxValueNumber);
  if (rangeResult > Number.MAX_SAFE_INTEGER) {
    setDialogMessage('Result is bigger than 9007199254740991');
    clearFields();
  } else {
    printResult(rangeResult);
  };
  checkRulesForInputValues();
});

document.querySelectorAll('input').forEach(element => {
  element.addEventListener('input', () => {
    checkRulesForInputValues();
  });
});

function setDialogMessage(message) {
  dialogMessageContainer.textContent = message;
  dialogContainer.showModal();
  setTimeout(() => { dialogContainer.close() }, 2000);
}

function checkRulesForInputValues() {
  const minValue = minInputContainer.value;
  const maxValue = maxInputContainer.value;
  const regex = new RegExp('^-?\\d*$');
  setButtonDisabled(true);
  if (!regex.test(minValue)) {
    setDialogMessage('Min value is incorrect.' + ruleMessage);
  } else if (!regex.test(maxValue)) {
    setDialogMessage('Max value is incorrect.' + ruleMessage);
  } else if (Number(minValue) > Number(maxValue)) {
    setDialogMessage('The minimum value is greater than the maximum value. Please fix.');
  } else if (minValue === '' || maxValue === '') {
    setButtonDisabled(true);
  } else {
    setButtonDisabled(false)
  }
}

function clearFields() {
  maxInputContainer.value = '';
  minInputContainer.value = '';
  resultContainer.textContent = '';
}

function setButtonDisabled(state) {
  buttonForRange.disabled = state;
}

function printResult(result) {
  resultContainer.textContent = result;
}

checkRulesForInputValues();

