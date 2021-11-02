import MainContent from "../MainContent";
import { renderGreetingContent, renderLoginContent, renderMain } from "./renderData";

export function checkLocalStorage() {
  checkStorageTheme();
  checkStorageName();
}

function checkStorageTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("checkbox").checked = true;
  }
}

export function checkStorageName() {
  if (localStorage.getItem('name')) {
    renderGreetingContent();
    renderMain();
    new MainContent();
  } else {
    renderLoginContent();
    if (document.querySelector('.wrapper')) document.querySelector('.wrapper').remove();
  }
}