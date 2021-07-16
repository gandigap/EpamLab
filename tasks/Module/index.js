const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please, enter your city on English? ', (answer) => {
  // TODO: Log the answer in a database  
  const weather = require('weather-js'); 
  
  weather.find({search: answer, degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);        
    const info = `
    Location: ${result[0].location.name}
    Sky: ${result[0].current.skytext} 
    Temperature: ${result[0].current.temperature}
    Wind: ${result[0].current.winddisplay} 
     `
    console.log(info)
    
  });

  rl.close();
    
});
