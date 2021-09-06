const array = [
  [7, 8, 0, 4],
  [2, 8, 4, 5],
  [1, 0, 2, 3]
];

function getArray(array) {
  const arrayCopy = deepCloneArray(array);
  if (Array.isArray(array[0])) {
    return getMultidimensionalArray(array, arrayCopy);
  } else {
    return getSimpleArray(array, arrayCopy);
  }
}

function getSimpleArray(array, arrayCopy) {
  for (let i in array) {
    const westPoint = i != array.length - 1 ? array[+i + 1] : 0;
    const eastPoint = i != 0 ? array[i - 1] : 0;
    arrayCopy[i] = westPoint + eastPoint;
  }
  return arrayCopy;
}

function getMultidimensionalArray(array, arrayCopy) {
  for (let i in array) {
    for (let j in array[i]) {
      const northPoint = i != 0 ? array[i - 1][j] : 0;
      const westPoint = j != array[i].length - 1 ? array[i][+j + 1] : 0;
      const southPoint = i != array.length - 1 ? array[+i + 1][j] : 0;
      const eastPoint = j != 0 ? array[i][j - 1] : 0;
      arrayCopy[i][j] = northPoint + westPoint + southPoint + eastPoint;
    }
  }
  return arrayCopy;
}

const deepCloneArray = (items) =>
  items.map((item) =>
    Array.isArray(item) ? deepCloneArray(item) : item);

console.log(getArray(array));