const fs = require('fs');

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  return fs.readFileSync(`./data/${breed}.txt`, 'utf8');
};

// get the return value right away from the function
const bombay = breedDetails('Bombay');
console.log(bombay.slice(0,35) + '...'); //=> prints out the description for that breed