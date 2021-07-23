const createElement = (typeEl, textEl, classNameEl, parentEl) => {
  const parent = document.querySelector(parentEl);
  const element = document.createElement(typeEl);
  if (classNameEl) {
    element.classList.add(classNameEl);
  }
  element.innerHTML = textEl;
  parent.appendChild(element);
}

export default createElement
