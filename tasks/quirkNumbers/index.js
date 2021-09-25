const inputContainer = document.getElementById('inputContainer');
const pContainer = document.querySelector('.pContainer');
const button = document.getElementById('button');
let dat = '5 3 6 * + 5 3 / - 7 +'


const calculateQuirkNumbers = async function () {
  const dataValues = dat.split(' ');
  const operands = ['+', '-', '/', '*'];
  const stack = [];

  dataValues.forEach(async currentElement => {
    if (operands.includes(currentElement)) {
      await calculateOperand(5, 2, '-');
    }
  })

  /* dataValues.forEach(async currentElement => {
    if (operands.includes(currentElement)) {
      const lastElement = parseInt(stack.pop());
      const penultElement = parseInt(stack.pop());
      const res =  calculateOperand(penultElement, lastElement, currentElement);
      stack.push(res);
    } else {
      stack.push(currentElement);
    }
  }); */

  /* return parseInt(stack.pop());*/
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
  console.log(result);
  return result;
};

const sum = async (parpenultElement, lastElementams) => {
  const timeOut = getRandomIntInclusive(2, 4);
  console.log(timeOut);
  const v = await sleep(timeOut);
  return parpenultElement + lastElementams;
}

const sub = async (parpenultElement, lastElementams) => {
  const timeOut = getRandomIntInclusive(2, 4);
  console.log(timeOut);
  const v = await sleep(timeOut);
  return parpenultElement - lastElementams;
}

const mul = async (parpenultElement, lastElementams) => {
  const timeOut = getRandomIntInclusive(2, 4);
  console.log(timeOut);
  const v = await sleep(timeOut);
  return parpenultElement * lastElementams;
}

const div = async (parpenultElement, lastElementams) => {
  const timeOut = getRandomIntInclusive(2, 4);
  console.log(timeOut);
  const v = await sleep(timeOut);
  return parpenultElement / lastElementams;
}

button.addEventListener('click', calculateQuirkNumbers, false);

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}


