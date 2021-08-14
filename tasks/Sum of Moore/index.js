const minInputContainer = document.getElementById('minValue');
const maxInputContainer = document.getElementById('maxValue');
const buttonForRange = document.getElementById('buttonForRange');
const resultContainer = document.getElementById('result');
const dialogContainer = document.getElementById('dialog');
const dialogMessageContainer = document.getElementById('dialogMessage');

function range(min, max) {
  const result = min + ((max - min) * ((max + min + 1) / 2));
  console.log(min, max, result);
  if (result > Number.MAX_SAFE_INTEGER) {
    setDialogMessage('MAX_SAFE_INTEGER');
    clearFields();
  } else {
    resultContainer.textContent = result;
  }
}

buttonForRange.addEventListener('click', () => {
  const minValueNumber = Number(minInputContainer.value);
  const maxValueNumber = Number(maxInputContainer.value);
  range(minValueNumber, maxValueNumber);
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
  buttonForRange.disabled = true;
  if (!regex.test(minValue)) {
    setDialogMessage('min value uncorrect');
  } else if (!regex.test(maxValue)) {
    setDialogMessage('max value uncorrect');
  } else if (Number(minValue) > Number(maxValue)) {
    setDialogMessage('min > max');
  } else {
    buttonForRange.disabled = false;
  }
}

function clearFields() {
  maxInputContainer.value = '';
  minInputContainer.value = '';
  resultContainer.textContent = '';
}


