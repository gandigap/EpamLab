const titles = ['some', 'any', 'no']

class App {
  constructor() {
    this.createListsDropDown();
    this.currentData = null;
    this.dropDowns = document.querySelectorAll('.dropdown');
  }

  async createListsDropDown() {
    const dropDownCategoriesContent = document.getElementById('categories__content');
    const dropDownTitlesContent = document.getElementById('titles__content');
    await this.getData();
    if (this.currentData === null || this.currentData.length === 0) {
      document.getElementById('other-content').innerHTML = `
      <h3 class="title-error">App don't have data</h3>
      `
    } else {
      const categories = this.currentData.entries.map(item => item.Category)
        .filter((value, index, self) => self.indexOf(value) === index)
      categories.forEach(category => {
        create('p', 'dropdown__content__link category', `${category}`, dropDownCategoriesContent);
      });
      titles.forEach(title => {
        create('p', 'dropdown__content__link title', `${title.toUpperCase()}`, dropDownTitlesContent);
      });
      this.addEventListenerForDropDowns();
    }
  }

  addEventListenerForDropDowns() {
    this.dropDowns.forEach(dropDown => {
      dropDown.addEventListener('click', this.checkElement.bind(this), false);
    });
  }

  async getData(queryString = '') {
    await fetch(`https://api.publicapis.org/entries?${queryString}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        this.currentData = data;

      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        this.currentData = null;
        console.log(this.currentData)
      });
  }

  async checkElement(event) {
    const targetInfo = event.target.textContent.split(' ')[0].toLowerCase();
    if (event.target.classList.contains('category')) {
      await this.getData(`category=${targetInfo}&https=true`);
    } else if (event.target.classList.contains('title')) {
      await this.getData(`title=${targetInfo}`);
    }
    this.renderData();
    console.log(targetInfo, this.currentData);
  }

  renderData() {
    const otherContent = document.getElementById('other-content');
    otherContent.innerHTML = '';
    this.currentData.entries.forEach(element => {
      create('div', 'api-info', ` 
      <h3 class="api-info__title">${element.API}</h3>
      <div class="api-info__description">${element.Description}</div>
      <a class="api-info__link" href="">${element.Link}</a>`, otherContent);
    });
  }
}

const app = new App();

function create(el, classNames = '', child, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(el)
  } catch (error) {
    throw new Error('Unable to create HTMLElement! You should give a proper HTML tag name');
  }

  if (classNames) element.classList.add(...classNames.split(' '));

  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (typeof child === 'string') {
    element.innerHTML = child;
  }
  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
        return;
      }
      if (attrName.match(/value|id|placeholder|type|value|cols|rows|src/i)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}