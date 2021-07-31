const readline = require('readline');
const weather = require('weather-js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please, enter your city in English? ', (answer) => {
  weather.find({ search: answer, degreeType: 'C' }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`
        Location: ${result[0].location.name}
        Sky: ${result[0].current.skytext} 
        Temperature: ${result[0].current.temperature}
        Wind: ${result[0].current.winddisplay}`
      );
    }
  });
  rl.close();
});