import { createField, changeListenersOnCells } from './gameActions';
import { createDialog } from './dialogs/dialogActions';

export function startGame() {
  createDialog();
  createField();
  changeListenersOnCells('add');
}

export function endGame() {
  changeListenersOnCells('remove');
  const field = document.querySelector('.field');
  field.remove();
  startGame();
}
