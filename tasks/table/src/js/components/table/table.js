import create from '../create';
import tableState from '../state/tableState';

class Table {
  constructor() {
    this.dogsData = tableState.dogsData;
    const body = document.querySelector('body');
    create('table', 'table', '', body, ['id', 'table']);
    this.table = document.querySelector('#table');
    this.addTableContent();
  }

  addTableContent() {
    this.addTableHeader();
    this.addTableBody();
  }

  addTableHeader() {
    create('thead', 'table__header', '<tr id="table__header__row"></tr>',
      this.table, ['id', 'table__header']);
    const tableHeaderRow = document.getElementById('table__header__row');
    tableState.tableHeaderNames.forEach((element) => {
      create('th', 'table__header__row__cell cell', element, tableHeaderRow, ['id', element]);
    });
    this.addListenersForHeader();
  }

  addTableBody() {
    this.dogsData.forEach((dog) => {
      create('thead', 'table__body', `
      <tr id="table__body__row">
        <td class="dog-breed">${dog.id}</td>
        <td class="dog-origin">${dog.origin}</td>
        <td class="dog-origin">${dog.height}</td>
        <td class="dog-image">
          <img src="assets/image/${dog.breed.toLowerCase()}" alt="">
        </td>
        
      </tr>`, this.table, ['id', `dog-${dog.id}`]);
    });
    /* create('thead', 'table__body', '<tr id="table__body__row"></tr>',
      this.table, ['id', 'table__body']);
    const tableHeaderRow = document.getElementById('table__body__row');
    tableState.tableHeaderNames.forEach((element) => {
      create('td', 'table__body__row__cell cell', element, tableHeaderRow, ['id', element]);
    });
    this.addListenersForHeader(); */
  }

  addListenersForHeader() {
    const headerRow = document.getElementById('table__header__row');
    headerRow.addEventListener('click', this.sorting, false);
  }

  sorting(event) {
    console.log(event.target.id);
  }
}

export default Table;
