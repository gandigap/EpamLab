import { createField } from "./gameFunctions";

let mark = 'x';
let state = null;

export function startGame() {
  createField();
  changeListenersOnCells('add');
  initState();
}

function changeListenersOnCells(status) {
  const cells = document.querySelectorAll('.field__cell');
  cells.forEach((element) => {
    status === 'add' ?
      element.addEventListener('click', setMark, false) :
      element.removeEventListener('click', setMark, false);
  });
}

function setMark() {
  let addClass = null;
  let removeClass = null;
  if (!this.hasAttribute('mark-index')) {
    this.setAttribute('mark-index', true)
    mark === 'x'
      ? (addClass = 'cell-o', removeClass = 'cell-x', mark = 'o')
      : (addClass = 'cell-x', removeClass = 'cell-o', mark = 'x');
    changeClassName(this, addClass, removeClass);
    setState(this.id);
  }
}

function changeClassName(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}

function initState() {
  state = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8']];
}


function setState(idCell) {
  state.forEach((elementState, index) => {
    const indexColumn = elementState.indexOf(`${idCell}`);
    const indexRow = index;
    if (indexColumn > -1) {
      state[indexRow][indexColumn] = mark;
      checkWin();
    }
  });
}

function checkWin() {
  if ((state[1][1] === state[0][1] && state[1][1] === state[2][1]) ||
    (state[1][1] === state[1][0] && state[1][1] === state[1][2]) ||
    (state[1][1] === state[0][0] && state[1][1] === state[2][2]) ||
    (state[1][1] === state[2][0] && state[1][1] === state[0][2]) ||
    (state[1][0] === state[0][0] && state[1][0] === state[2][1]) ||
    (state[0][1] === state[0][0] && state[0][1] === state[2][0]) ||
    (state[1][2] === state[0][2] && state[1][2] === state[2][2]) ||
    (state[2][1] === state[0][2] && state[2][1] === state[2][2])) {
    console.log('win', mark);
    endGame();
  }
}
function endGame() {
  changeListenersOnCells('remove');
  const field = document.querySelector('.field');
  field.remove();
  startGame();
}