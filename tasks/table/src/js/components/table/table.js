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
    tableState.tableHeaderNames.forEach((element, index) => {
      const classNameClick = index !== 3 ? ' header__cell-clickable' : '';
      create('th', `table__header__row__cell cell${classNameClick}`, element, tableHeaderRow, ['id', element]);
    });
    this.addListenersForHeader();
  }

  addTableBody() {
    create('tbody', 'table__body', '', this.table, ['id', 'table__body']);
    const tableBody = document.getElementById('table__body');
    this.dogsData.forEach((dog) => {
      create('tr', 'table__body__row', `     
        <td class="table__body__row__cell dog-breed">${dog.breed}</td>
        <td class="table__body__row__cell dog-country">${dog.country}</td>
        <td class="table__body__row__cell dog-height">${dog.height}</td>
        <td class="table__body__row__cell dog-imageContainer">
          <img class="dog-imageContainer__image" src="assets/images/${dog.breed.toLowerCase()}.jpg" alt="">
        </td>        
      `, tableBody, ['id', `dog-${dog.id}`]);
    });
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

    [breed, country, height,] = [...tableState.tableHeaderNames];
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
    if (param !== null) this.dogsData.sort((a, b) => ((a[`${param}`] > b[`${param}`]) ? 1 : -1));
    document.getElementById('table__body').remove();
    this.addTableBody();
  }
}

export default Table;
