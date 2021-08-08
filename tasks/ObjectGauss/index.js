function randn_bm() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};

function fillArray() {
  let arrayVal = new Array(10);
  arrayVal.fill(null);
  return arrayVal.map((elem) => randn_bm());
}

function getDataFromArray(array) {
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}

function printObject(obj) {
  let tbody = document.querySelector('tbody');
  for (const [key, value] of Object.entries(obj)) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${key}</td><td>${value}</td>`;
    tbody.appendChild(row);
  }
}

const arr = fillArray();
const wrapper = document.createElement('div');
document.body.appendChild(wrapper);
let stringData = `
  <h1>Object Gauss</h1> 
  <p>[${arr}]</p>
  <table>
    <thead>
      <tr>
        <th>Value</th>
        <th>Entries</th>
      </tr>
    </thead>
    <tbody>            
    </tbody>
  </table>`;
wrapper.innerHTML = stringData;
printObject(getDataFromArray(arr));


