import { checkStorageName } from './checkLocalStorage';

const _objCreate = await import('./create');
const create = _objCreate.default;
const body = document.querySelector('body');

export function renderData(info) {
  const otherContent = document.getElementById('other-content');
  otherContent.innerHTML = '';
  const [data] = [...info.entries];
  create('div', 'api-info', `
    <h3 class="api-info__title">${data.API}</h3>
    <div class="api-info__description">${data.Description}</div>
    <a class="api-info__link" href="">${data.Link}</a>`, otherContent);
}

export function renderHeader() {
  create('header', 'header', `
    <div class="theme-switch-container">
      <label class="switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="switch__icon"></div>
      </label>
    </div> `, body);
}

export function renderMain() {
  create('main', 'wrapper', `
  <div class="dropdowns">
    <div class="dropdown" id="categories">
      <span class="dropdown__title">Categories</span>
      <div class="dropdown__content" id="categories__content">
      </div>
    </div>
    <div class="dropdown" id="titles">
      <span class="dropdown__title">Titles</span>
      <div class="dropdown__content" id="titles__content">
      </div>
    </div>
  </div>
  <div id="other-content"></div>`, body);
}

export function renderGreetingContent() {
  create('div', 'submit-container',
    `<h3 class="submit-container__title">${localStorage.getItem('name')}</h3>
    <button class="submit-container__button-logout">Logout</button>`,
    document.querySelector('.header'));
  document.querySelector('.submit-container__button-logout').onclick = () => {
    localStorage.removeItem('name');
    document.querySelector('.submit-container').remove();
    checkStorageName();
  };
}

export function renderLoginContent() {
  create('div', 'login-container',
    `<h3 class="login-container__title">Please enter login:</h3>
   <div class="login-container__input-container">
     <input type="text" class="login-container__input-container__input" name="userName">
   </div>
   <button class="login-container__button-submit">Submit</button>`,
    document.querySelector('.header'));
  const inputName = document.querySelector('.login-container__input-container__input');
  document.querySelector('.login-container__button-submit').onclick = () => {
    localStorage.setItem('name', inputName.value);
    document.querySelector('.login-container').remove();
    checkStorageName();
  };
}