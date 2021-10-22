
const _headerContainer = document.querySelector('.header');
const _objCreate = await import('./create');
const create = _objCreate.default;

function checkLocalStorage() {
  checkStorageTheme();
  checkStorageName();
}

function checkStorageTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("checkbox").checked = true;
  }
}

function checkStorageName() {
  if (localStorage.getItem('name')) {
    renderGreetingContent();
  } else {
    renderLoginContent();
  }
}

function renderGreetingContent() {
  create('div', 'submit-container',
    `<h3 class="submit-container__title">Hello ${localStorage.getItem('name')}</h3>
    <button class="submit-container__button-logout">Logout</button>`,
    _headerContainer);
  document.querySelector('.submit-container__button-logout').onclick = () => {
    localStorage.removeItem('name');
    document.querySelector('.submit-container').remove();
    renderLoginContent();
  };
}

function renderLoginContent() {
  create('div', 'login-container',
    `<h3 class="login-container__title">Login please</h3>
   <div class="login-container__input-container">
     <input type="text" id="login-container__input-container__input" name="userName">
   </div>
   <button class="login-container__button-submit">Submit</button>`,
    _headerContainer);
  const inputName = document.getElementById('login-container__input-container__input');
  document.querySelector('.login-container__button-submit').onclick = () => {
    localStorage.setItem('name', inputName.value);
    document.querySelector('.login-container').remove();
    renderGreetingContent();
  };
}

export default checkLocalStorage;