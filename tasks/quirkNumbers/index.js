const inputContainer = document.getElementById('inputContainer');
const pContainer = document.querySelector('.pContainer');
const button = document.getElementById('button');

button.addEventListener('click', newFunction, false);

async function newFunction(event) {
  let timeOut = getRandomIntInclusive(0, 4);
  await sleep(timeOut);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}