import './styles/index.scss';

class App {
  constructor() {
    this.categories = null;
    this.titles = null;
    this.createListDropDown('categories');
    this.currentData = null;
    this.dropDownCategories = document.getElementById('categories');
    this.dropDownCategoriesContent = document.getElementById('categories__content');
    this.dropDownTitlesContent = document.getElementById('titles__content');
    this.dropDownTitles = document.getElementById('titles');
  }

  getArrayFilterData(data) {
    return this.currentData.entries.map(item => {
      return data === 'categories' ? item.Category : item.API;
    }).filter((value, index, self) => self.indexOf(value) === index);
  }

  async createListDropDown(type) {
    if (type === 'categories') {
      await this.getData();
      if (this.currentData === null || this.currentData.length === 0) {
        document.getElementById('other-content').innerHTML = `
        <h3 class="title-error">App don't have data</h3>
        `
      } else {
        this.categories = this.getArrayFilterData('categories');
        this.categories.forEach(category => {
          create('p', 'dropdown__content__link category', `${category}`, this.dropDownCategoriesContent);
        });
        this.addEventListenerForDropDown('category');
      }

    } else if (type === 'titles') {
      this.dropDownTitlesContent.innerHTML = '';
      this.titles.forEach(title => {
        create('p', 'dropdown__content__link title', `${title.toUpperCase()}`, this.dropDownTitlesContent);
      });
      this.addEventListenerForDropDown('title');
    }
  }

  addEventListenerForDropDown(info) {
    if (info === 'category') {
      const categoryLinks = document.querySelectorAll('.category');
      categoryLinks.forEach(categoryLink => {
        categoryLink.addEventListener('click', this.checkElement.bind(this), false);
      });
    } else if (info === 'title') {
      const titleLinks = document.querySelectorAll('.title');
      titleLinks.forEach(titleLink => {
        titleLink.addEventListener('click', this.checkElement.bind(this), false);
      });
    }
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
      });
  }

  async checkElement(event) {
    const targetInfo = event.target.textContent.split(' ')[0].toLowerCase();
    if (event.target.classList.contains('category')) {
      this.dropDownTitles.style.display = 'block';
      await this.getData(`category=${targetInfo}&https=true`);
      this.titles = this.getArrayFilterData('titles');
      this.createListDropDown('titles');
      console.log('c')
    } else if (event.target.classList.contains('title')) {
      await this.getData(`title=${targetInfo}`);
      this.renderData();
    }

  }

  renderData() {
    const otherContent = document.getElementById('other-content');
    otherContent.innerHTML = '';
    const [data] = [...this.currentData.entries];
    console.log(data);
    create('div', 'api-info', ` 
      <h3 class="api-info__title">${data.API}</h3>
      <div class="api-info__description">${data.Description}</div>
      <a class="api-info__link" href="">${data.Link}</a>`, otherContent);
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
