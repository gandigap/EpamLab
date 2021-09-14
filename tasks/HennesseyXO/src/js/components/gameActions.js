import create from './constructor/create';
import gameState from './state/state';

let { currentMark, playerNames } = gameState;
const { dataCells } = gameState;

export function createField() {
  const body = document.querySelector('body');
  create('div', 'field', '', body);
  const field = document.querySelector('.field');
  for (let index = 0; index < 9; index += 1) {
    create('div', 'field__cell', '', field, ['id', index]);
  }
}

function changeClassName(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}

function checkWin() {
  if ((dataCells[1][1] === dataCells[0][1] && dataCells[1][1] === dataCells[2][1])
    || (dataCells[1][1] === dataCells[1][0] && dataCells[1][1] === dataCells[1][2])
    || (dataCells[1][1] === dataCells[0][0] && dataCells[1][1] === dataCells[2][2])
    || (dataCells[1][1] === dataCells[2][0] && dataCells[1][1] === dataCells[0][2])
    || (dataCells[1][0] === dataCells[0][0] && dataCells[1][0] === dataCells[2][0])
    || (dataCells[0][1] === dataCells[0][0] && dataCells[0][1] === dataCells[0][2])
    || (dataCells[1][2] === dataCells[0][2] && dataCells[1][2] === dataCells[2][2])
    || (dataCells[2][1] === dataCells[2][0] && dataCells[2][1] === dataCells[2][2])) {
    console.log('win', currentMark);
    /* endGame(); */
  }
}

function setState(idCell) {
  dataCells.forEach((elementState, index) => {
    const indexColumn = elementState.indexOf(`${idCell}`);
    const indexRow = index;
    if (indexColumn > -1) {
      dataCells[indexRow][indexColumn] = currentMark;
      checkWin();
    }
  });
}

function setMark() {
  let addClass = null;
  let removeClass = null;
  if (!this.hasAttribute('mark-index')) {
    this.setAttribute('mark-index', true);
    // eslint-disable-next-line no-unused-expressions
    currentMark === 'x'
      ? (addClass = 'cell-o', removeClass = 'cell-x', currentMark = 'o')
      : (addClass = 'cell-x', removeClass = 'cell-o', currentMark = 'x');
    changeClassName(this, addClass, removeClass);
    setState(this.id);
  }
}

export function changeListenersOnCells(status) {
  const cells = document.querySelectorAll('.field__cell');
  cells.forEach((element) => {
    // eslint-disable-next-line no-unused-expressions
    status === 'add'
      ? element.addEventListener('click', setMark, false)
      : element.removeEventListener('click', setMark, false);
  });
}
