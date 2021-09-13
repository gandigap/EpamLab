import { createField } from "./gameFunctions";

let mark = 'x';
export function startGame() {
  createField();
  addClickListenersToCells();
}

function addClickListenersToCells() {
  const cells = document.querySelectorAll('.field__cell');
  cells.forEach((element) => {
    element.addEventListener('click', setMark, false);
  });
}

function setMark() {
  let addClass = null;
  let removeClass = null;

  if (!this.hasAttribute('mark-index')) {
    this.setAttribute('mark-index', true)
    mark === 'x'
      ? (addClass = 'cell-o', removeClass = 'cell-x', mark = 'o')
      : (addClass = 'cell-x', removeClass = 'cell-o', mark = 'x');

    changeClassName(this, addClass, removeClass);
  }
}

function changeClassName(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}