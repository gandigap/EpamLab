const buttonComplete = document.querySelector('.complete');
const containerResult = document.querySelector('.result');
const inputData = document.getElementById('inputData');

let getAllPermutations = (data) => {
  if (!data || typeof data !== "string") {
    return "Please enter data";
  } else if (data.length < 2) {
    return data;
  }

  let arrayPermutations = [];

  for (let i = 0; i < data.length; i++) {
    const char = data[i];

    if (data.indexOf(char) != i) continue;

    const remainingChars = data.slice(0, i) + data.slice(i + 1, data.length);

    for (let permutation of getAllPermutations(remainingChars)) {
      arrayPermutations.push(char + permutation);
    }
  }
  return arrayPermutations;
}

buttonComplete.addEventListener('click', () => {
  const data = inputData.value.split('')
    .sort()
    .join('');
  containerResult.textContent = '';
  containerResult.textContent = getAllPermutations(data).toString();
})