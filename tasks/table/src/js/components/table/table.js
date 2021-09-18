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
    this.updateState();
  }

  updateState() {
    console.log('update');
    /* const dogsMap = new Map();
    this.dogsData.forEach((dog, index) => {
      dogsMap.set(index, dog);
    });
    console.log(dogsMap, 'ff');
    console.log([...dogsMap].sort((a, b) => ((a[1].breed > b[1].breed) ? 1 : -1)), 'dddddd'); */
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
      create('tr', 'table__body__row', `
      <td class="table__body__row__cell dog-breed table__body__row__cell-clickable" tabindex="${tabIndexValue += 1}">
        ${dogInfo.breed}
      </td>
      <td class="table__body__row__cell dog-country table__body__row__cell-clickable" tabindex="${tabIndexValue += 1}">
        ${dogInfo.country}
      </td>
      <td class="table__body__row__cell dog-height table__body__row__cell-clickable" tabindex="${tabIndexValue += 1}">
        ${dogInfo.height}
      </td>
      <td class="table__body__row__cell dog-imageContainer">
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
    if (param !== null) this.dogsData = new Map([...this.dogsData].sort((a, b) => ((a[1][`${param}`] > b[1][`${param}`]) ? 1 : -1)), 'test');
    console.log(this.dogsData);
    /* console.log([...dogsMap].sort((a, b) => ((a[1].breed > b[1].breed) ? 1 : -1)), 'dddddd'); 
    
    ((a[1][`${param}`] > b[1][`${param}`]) ? 1 : -1)*/
    document.getElementById('table__body').remove();
    this.addTableBody();
  }
}

export default Table;
