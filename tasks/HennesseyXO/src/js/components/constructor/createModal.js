import create from './create';
import { startGame } from '../actions/gameActions';

export default function createModal() {
  const body = document.querySelector('body');
  create('div', 'modalMenu', `
    <div class="modalMenu__content">
      <h1 class="modalMenu__content__title">HennesseyXO</h1>
      <button class="modalMenu__content__button" id="settingButton">Setting</button>
      <button class="modalMenu__content__button" id="startGameButton">Start</button>
    </div>`, body, ['id', 'modal']);
  const startButton = document.getElementById('startGameButton');
  startButton.addEventListener('click', startGame, false);
}
