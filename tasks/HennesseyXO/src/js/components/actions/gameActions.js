import createField from '../constructor/createfield';
import gameState from '../state/state';
import { changeDisplayModal, changeClassName } from './actionWithStyle';
import { createDialog } from '../dialogs/dialogActions';

let { currentMark, numberMoves, statusGame } = gameState;
const { dataCells, audio } = gameState;

function setGameStateDefaultValues() {
  let value = 0;
  for (let i = 0; i < dataCells.length; i += 1) {
    for (let j = 0; j < dataCells[i].length; j += 1) {
      dataCells[i][j] = `${value}`;
      value += 1;
    }
  }
  numberMoves = 0;
  statusGame = null;
}

function endGame(status) {
  createDialog(status);
  const buttonRestart = document.querySelector('#button-startGame');
  buttonRestart.addEventListener('click', () => {
    document.querySelector('.field').remove();
    startGame();
    const dialog = document.querySelector('.dialogContainer');
    dialog.close();
  });
}

function checkWin() {
  numberMoves += 1;
  if ((dataCells[1][1] === dataCells[0][1] && dataCells[1][1] === dataCells[2][1])
    || (dataCells[1][1] === dataCells[1][0] && dataCells[1][1] === dataCells[1][2])
    || (dataCells[1][1] === dataCells[0][0] && dataCells[1][1] === dataCells[2][2])
    || (dataCells[1][1] === dataCells[2][0] && dataCells[1][1] === dataCells[0][2])
    || (dataCells[1][0] === dataCells[0][0] && dataCells[1][0] === dataCells[2][0])
    || (dataCells[0][1] === dataCells[0][0] && dataCells[0][1] === dataCells[0][2])
    || (dataCells[1][2] === dataCells[0][2] && dataCells[1][2] === dataCells[2][2])
    || (dataCells[2][1] === dataCells[2][0] && dataCells[2][1] === dataCells[2][2])) {
    statusGame = 'win';
    gameState.currentMark = currentMark;
    endGame(statusGame);
  } else if (numberMoves === 9 && statusGame !== 'win') {
    statusGame = 'even';
    endGame(statusGame);
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
  audio.play();
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

export function addListenersOnCells() {
  const cells = document.querySelectorAll('.field__cell');
  cells.forEach((element) => {
    element.addEventListener('click', setMark, false);
  });
}

function setPlayerNames() {
  const { players } = gameState;
  const inputsName = document.querySelectorAll('.modalMenu__content__inputContainer__input');
  players.firstName = inputsName[0].value;
  players.secondName = inputsName[1].value;
}

export function startGame() {
  changeDisplayModal('none');
  setGameStateDefaultValues();
  setPlayerNames();
  createField();
  addListenersOnCells('add');
}
