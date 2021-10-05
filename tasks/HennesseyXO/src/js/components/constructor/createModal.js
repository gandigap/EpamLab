import create from './create';
import { startGame } from '../actions/gameActions';

export default function createModal() {
  const body = document.querySelector('body');
  create('div', 'modalMenu', `
    <div class="modalMenu__content">
      <h1 class="modalMenu__content__title">HennesseyXO</h1>   
      <p class='modalMenu__content__subtitle'>Please enter player names</p>
      <div class='modalMenu__content__input-container'>
        <label class='modalMenu__content__input-container__label' for="player1name">Player1 :</label>
        <input class='modalMenu__content__input-container__input' type="text" id="player1name" placeholder='name'>
      </div>
      <div class='modalMenu__content__input-container'>
        <label class='modalMenu__content__input-container__label' for="player2name">Player2 :</label>
        <input class='modalMenu__content__input-container__input' type="text" id="player2name" placeholder='name'>
      </div>   
      <button class="modalMenu__content__button" id="startGameButton">START</button>
    </div>`, body, ['id', 'modal']);
  const startButton = document.getElementById('startGameButton');
  startButton.addEventListener('click', startGame, false);
}
