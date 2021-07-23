import createElement from "./components/createElement.js";
import data from "./components/data.js";

createElement('h1',
  `Task2 -Type coercion can be explicit and implicit.`,
  '',
  'body');

for (const [key, value] of Object.entries(data)) {
  switch (key) {
    case 'string':
      createElement('h3', `String conversation`, '', 'body');
      break;
    case 'numeric':
      createElement('h3', `Number conversation`, '', 'body');
      break;
    case 'boolean':
      createElement('h3', `Boolean conversation`, '', 'body');
      break;

    default:
      console.log('def')
      break;
  }

  value.forEach(element => {
    const firstValue = element.value1;
    const secondVlaue = element.value2;
    const resultValue = element.result;
    const markOperation = element.mark;
    const typeCoercion = element.type;
    createElement('div',
      `<p class="example">${firstValue} ${markOperation} ${secondVlaue}</p> 
       <p class="result">${resultValue}. Type coercion: ${typeCoercion}</p>`,
      'container',
      'body');
  });

}
