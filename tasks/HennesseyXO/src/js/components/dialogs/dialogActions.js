import create from '../constructor/create';
import dialogContent from './constDialogContent';
import gameState from '../state/state';

export function changeStateDialog(state) {
  const dialogContainer = document.querySelector('.dialogContainer');
  // eslint-disable-next-line no-unused-expressions
  state === 'open' ? dialogContainer.showModal() : dialogContainer.close();
}

function setContentDialog(dialogContainer, status) {
  dialogContainer.innerHTML = status === 'win'
    ? `<p class="dialogContainer__winner">
        ${gameState.currentMark === 'x' ? gameState.players.firstName : gameState.players.secondName} 
       </p> ${dialogContent.winContent}`
    : dialogContent.evenContent;
}

export function createDialog(status) {
  const body = document.querySelector('body');
  create('dialog', 'dialogContainer', '', body);
  const dialog = document.querySelector('.dialogContainer');
  setContentDialog(dialog, status);
  changeStateDialog('open');
}
