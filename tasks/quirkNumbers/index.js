const inputContainer = document.getElementById('inputContainer');
const pContainer = document.querySelector('.pContainer');
const button = document.getElementById('button');

const calculateQuirkNumbers = async function () {
  const dataValues = inputContainer.value.split(' ');
  const operands = ['+', '-', '/', '*'];
  const stack = [];

  for await (data of dataValues) {
    if (operands.includes(data)) {
      const lastElement = parseInt(stack.pop());
      const penultElement = parseInt(stack.pop());
      let res = await calculateOperand(penultElement, lastElement, data);
      stack.push(res);
    } else {
      stack.push(data);
    }
    pContainer.textContent = 'Please wait';
  }
  pContainer.textContent = `Result : ${parseInt(stack.pop())}`;
};

const calculateOperand = async (penultElement, lastElement, operand) => {
  let result = null;
  switch (operand) {
    case '+':
      result = await sum(penultElement, lastElement)
      break;
    case '-':
      result = await sub(penultElement, lastElement)
      break;
    case '*':
      result = await mul(penultElement, lastElement)
      break;
    case '/':
      result = await div(penultElement, lastElement)
      break;

    default:
      break;
  }
  return result;
};

const sum = async (penultElement, lastElement) => {
  const timeOut = getRandomIntInclusive(2, 4);
  const v = await sleep(timeOut);
  return penultElement + lastElement;
}

const sub = async (penultElement, lastElement) => {
  const timeOut = getRandomIntInclusive(2, 4);
  const v = await sleep(timeOut);
  return penultElement - lastElement;
}

const mul = async (penultElement, lastElement) => {
  const timeOut = getRandomIntInclusive(2, 4);
  const v = await sleep(timeOut);
  return penultElement * lastElement;
}

const div = async (penultElement, lastElement) => {
  const timeOut = getRandomIntInclusive(2, 4);
  const v = await sleep(timeOut);
  return penultElement / lastElement;
}

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

button.addEventListener('click', calculateQuirkNumbers, false);
