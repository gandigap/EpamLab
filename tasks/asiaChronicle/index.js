const titles = ['some', 'any', 'no']

class App {
  constructor() {
    this.createListsDropDown();
    this.currentData = null;
    /* this.dropDown = document.querySelector('.dropdown');
    this.content = document.getElementById('other-content');
    this.dropDown.addEventListener('click', this.checkElement, false); */
  }

  async createListsDropDown() {
    const dropDownCategoriesContent = document.getElementById('categories__content');
    const dropDownTitlesContent = document.getElementById('titles__content');
    await this.getData('entries');
    const categories = this.currentData.entries.map(item => item.Category)
      .filter((value, index, self) => self.indexOf(value) === index)
    categories.forEach(category => {
      create('p', 'dropdown__content__link', `${category}`, dropDownCategoriesContent);
    });

    titles.forEach(title => {
      create('p', 'dropdown__content__link', `${title.toUpperCase()}`, dropDownTitlesContent);
    });
  }

  async getData(queryString) {
    await fetch(`https://api.publicapis.org/${queryString}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.currentData = data;
        console.log(this.currentData, queryString);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }


  checkElement(event) {
    if (event.target.hasAttribute('id')) {
      console.log(event.target);
      fetch('https://api.publicapis.org/entries')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);

        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
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