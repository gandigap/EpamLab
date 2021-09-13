/* eslint-disable no-unused-expressions */
import create from '../create';

export function createField() {
  const body = document.querySelector('body');
  create('div', 'field', '', body);
  const field = document.querySelector('.field');
  for (let index = 0; index < 9; index += 1) {
    create('div', 'field__cell', '', field, ['id', index]);
  }
}








