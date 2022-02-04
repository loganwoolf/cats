const {accessSync, readFileSync, constants} = require('fs');

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  const path = `./data/${breed}.txt`;
  try {
    accessSync(path, constants.R_OK);
  } catch (err) {
    return 'Details not found.';
  }
  return readFileSync(path, 'utf8');
};

// get the return value right away from the function
const cat = breedDetails('Tiger');
console.log(cat);
// console.log(bombay.slice(0,35) + '...'); //=> prints out the description for that breed

module.exports = breedDetails;