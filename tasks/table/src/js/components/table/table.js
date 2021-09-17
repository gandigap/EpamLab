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
      const classNameClick = index !== 3 ? ' cell-clickable' : '';
      create('th', `table__header__row__cell cell${classNameClick}`, element, tableHeaderRow, ['id', element]);
    });
    this.addListenersForHeader();
  }

  addTableBody() {
    this.dogsData.forEach((dog, index) => {
      create('thead', 'table__body', `
      <tr class="table__body__row" id="table__body__row-${index}">
        <td class="table__body__row__cell dog-breed">${dog.breed}</td>
        <td class="table__body__row__cell dog-country">${dog.country}</td>
        <td class="table__body__row__cell dog-height">${dog.height}</td>
        <td class="table__body__row__cell dog-imageContainer">
          <img class="dog-imageContainer__image" src="assets/images/${dog.breed.toLowerCase()}.jpg" alt="">
        </td>
        
      </tr>`, this.table, ['id', `dog-${dog.id}`]);
    });
  }

  addListenersForHeader() {
    const headerRow = document.getElementById('table__header__row');
    headerRow.addEventListener('click', this.sorting, false);
  }

  sorting(event) {
    console.log(this.dogsData);
    let breed = null;
    let country = null;
    let height = null;
    let image = null;
    let param = null;

    [breed, country, height, image] = [...tableState.tableHeaderNames];
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
    /* this.dogsData.sort((a, b) => ((a[`${param}`] > b[`${param}`]) ? 1 : -1)); */

  }
}

export default Table;
