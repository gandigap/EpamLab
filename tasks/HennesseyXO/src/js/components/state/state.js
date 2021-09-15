const gameState = {
  currentMark: 'x',
  dataCells: [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8']],
  statusGame: null,
  audio: new Audio('assets/sounds/click.mp3'),
  numberMoves: 0,
  players: {
    firstName: null,
    secondName: null,
  },
};

export default gameState;
