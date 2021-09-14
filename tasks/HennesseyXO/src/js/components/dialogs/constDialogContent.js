const dialogContent = {
  startContent: `
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
  <button class='dialogContainer__button' id='button-startGame'>Start</button>`,
  winContent: "<h3 class='dialogContainer__title'>Congratulations</h3>",
  evenContent: 'Even',
};
export default dialogContent;
