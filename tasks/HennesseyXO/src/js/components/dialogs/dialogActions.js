import create from '../constructor/create';
import gameState from '../state/state';

function setPlayerNames(params) {

}

function setStartContentDialog(dialogContainer) {
  dialogContainer.innerHTML = `
    <h3 class='dialogContainer__title'>HennesseyXO</h3>
    <p class='dialogContainer__subtitle'>Please enter player names</p>
    <div class='dialogContainer__inputContainer'>
      <label class='dialogContainer__inputContainer__label' for="player1name">Player1 :</label>
      <input class='dialogContainer__inputContainer__input' type="text" id="player1name" placeholder='name'>
    </div>
    <div class='dialogContainer__inputContainer'>
      <label class='dialogContainer__inputContainer__label' for="player2name">Player2 :</label>
      <input class='dialogContainer__inputContainer__input' type="text" id="player2name" placeholder='name'>
    </div>
    <button class='dialogContainer__button' id='button-startGame'>Start</button>
  `;
  const buttonStart = document.getElementById('button-startGame');
  buttonStart.addEventListener('click', setPlayerNames, false)
}

export function changeContentDialog(type) {
  const dialog = document.querySelector('.dialogContainer');
  // eslint-disable-next-line default-case
  switch (type) {
    case 'start':
      setStartContentDialog(dialog);
      break;
  }
  dialog.showModal();
}

export function createDialog() {
  const body = document.querySelector('body');
  create('dialog', 'dialogContainer', '', body);
  changeContentDialog('start');
}
