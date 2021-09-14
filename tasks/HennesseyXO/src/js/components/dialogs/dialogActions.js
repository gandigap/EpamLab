import create from '../constructor/create';
import gameState from '../state/state';
import { startGame } from '../gameActions';
import dialogContent from './constDialogContent';

export function changeStateDialog(state) {
  const dialogContainer = document.querySelector('.dialogContainer');
  // eslint-disable-next-line no-unused-expressions
  state === 'open' ? dialogContainer.showModal() : dialogContainer.close();
}
function setPlayerNames() {
  const { playerNames } = gameState;
  const inputsName = document.querySelectorAll('.dialogContainer__inputContainer__input');
  playerNames.firstPlayerName = inputsName[0].value;
  playerNames.secondPlayerName = inputsName[1].value;
  changeStateDialog('close');
  startGame();
}

function setStartContentDialog(dialogContainer) {
  dialogContainer.innerHTML = dialogContent.startContent;
  const buttonStart = document.getElementById('button-startGame');
  buttonStart.addEventListener('click', setPlayerNames, false);
}

export function createDialog() {
  const body = document.querySelector('body');
  create('dialog', 'dialogContainer', '', body);
  const dialog = document.querySelector('.dialogContainer');
  setStartContentDialog(dialog)
  changeStateDialog('open');
}
