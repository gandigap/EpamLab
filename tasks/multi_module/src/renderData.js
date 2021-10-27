import create from "./create";

export function renderData(info) {
  const otherContent = document.getElementById('other-content');
  otherContent.innerHTML = '';
  const [data] = [...info.entries];
  create('div', 'api-info', `
    <h3 class="api-info__title">${data.API}</h3>
    <div class="api-info__description">${data.Description}</div>
    <a class="api-info__link" href="">${data.Link}</a>`, otherContent);
}