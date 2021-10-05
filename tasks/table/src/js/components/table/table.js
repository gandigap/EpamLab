import create from '../create';
import tableState from '../state/tableState';

class Table {
  constructor() {
    this.dogsData = null;
    this.initDogsData();
    const body = document.querySelector('body');
    create('table', 'table', '', body, ['id', 'table']);
    this.table = document.querySelector('#table');
    this.addTableContent();
  }

  initDogsData() {
    const dogsData = new Map();
    tableState.dogsData.forEach((dog, index) => {
      dogsData.set(index, dog);
    });
    this.dogsData = dogsData;
  }

  addTableContent() {
    this.addTableHeader();
    this.addTableBody();
  }

  addTableHeader() {
    create('thead', 'table__header', '<tr id="table__header__row"></tr>',
      this.table, ['id', 'table__header']);
    const tableHeaderRow = document.getElementById('table__header__row');
    tableState.tableHeaderNames.forEach((element, index) => {
      const classNameClick = index !== 3 ? ' header__cell-clickable' : '';
      create('th', `table__header__row__cell cell${classNameClick}`, element, tableHeaderRow, ['id', element]);
    });
    this.addListenersForHeader();
  }

  changeContenteditableCell() {
    this.setAttribute('contenteditable', 'true');
  }

  changeState(cell) {
    cell.removeAttribute('contenteditable');
    const indexState = cell.parentNode.id.split('-')[1];
    const cellTextContent = cell.textContent.trim();
    let value = null;
    const attribute = cell.getAttribute('data-type');
    switch (attribute) {
      case 'breed':
      case 'country':
        value = cellTextContent;
        break;
      case 'height':
        value = parseInt(cellTextContent, 10);
        break;
      default:
        break;
    }
    tableState.dogsData[indexState][attribute] = value;
    this.initDogsData();
  }

  addListenersForBodyCells() {
    const tableBodyCells = document.querySelectorAll('.table__body__row__cell-clickable');
    tableBodyCells.forEach((tableBodyCell) => {
      tableBodyCell.addEventListener('click', this.changeContenteditableCell.bind(tableBodyCell), false);
      tableBodyCell.addEventListener('blur', this.changeState.bind(this, tableBodyCell));
    });
  }

  addTableBody() {
    create('tbody', 'table__body', '', this.table, ['id', 'table__body']);
    const tableBody = document.getElementById('table__body');
    let tabIndexValue = 0;
    this.dogsData.forEach((dogInfo, dogKey) => {
      const className = [
        'table__body__row__cell table__body__row__cell-clickable',
        'table__body__row__cell',
      ];
      create('tr', 'table__body__row', `
      <td class="${className[0]}" tabindex="${tabIndexValue += 1}" data-type="breed">
        ${dogInfo.breed}
      </td>
      <td class="${className[0]}" tabindex="${tabIndexValue += 1}" data-type="country">
        ${dogInfo.country}
      </td>
      <td class="${className[0]}" tabindex="${tabIndexValue += 1}" data-type="height">
        ${dogInfo.height}
      </td>
      <td class="${className[1]} dog-imageContainer">
        <img class="dog-imageContainer__image" src="assets/images/${dogInfo.breed.toLowerCase()}.jpg" alt="">
      </td>
    `, tableBody, ['id', `dog-${dogKey}`]);
    });
    this.addListenersForBodyCells();
  }

  addListenersForHeader() {
    const headerRow = document.getElementById('table__header__row');
    headerRow.addEventListener('click', this.sorting.bind(this), false);
  }

  sorting(event) {
    let breed = null;
    let country = null;
    let height = null;
    let param = null;

    [breed, country, height] = [...tableState.tableHeaderNames];
    switch (event.target.id) {
      case breed:
        param = 'breed';
        break;
      case country:
        param = 'country';
        break;
      case height:
        param = 'height';
        break;
      default:
        break;
    }
    if (param !== null) {
      this.dogsData = new Map([...this.dogsData]
        .sort((a, b) => ((a[1][`${param}`] > b[1][`${param}`]) ? 1 : -1)), 'test');
    }
    document.getElementById('table__body').remove();
    this.addTableBody();
  }
}

export default Table;
