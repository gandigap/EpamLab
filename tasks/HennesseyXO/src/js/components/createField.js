import create from "../create";

export function createField() {
  const body = document.querySelector('body');
  create('div', 'field', ``, body);
  const field = document.querySelector('.field');
  for (let index = 0; index < 9; index++) {
    create('div', 'field__cell', ``, field);
  }
  addClickListeners();
}

export function addClickListeners() {
  const cells = document.querySelectorAll('.field__cell');
  cells.forEach(element => {
    element.addEventListener("click", setMark(element));
  });
}

function setMark(element) {
  let addClass = null;
  let removeClass = null;
  element.classList.contains('cell-x') ?
    (addClass = 'cell-0', removeClass = 'cell-x') :
    (addClass = 'cell-x', removeClass = 'cell-0');

  changeClassName(element, addClass, removeClass);
}

function changeClassName(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}