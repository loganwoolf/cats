const { readFile } = require('fs');

const breedDetails = function(breed, callback) {
  readFile(`./data/${breed}.txt`
    , 'utf8'
    , (error, data) => {
      return !error ? callback(data) : callback(undefined);
    });
};

// const logDetails = (data) => {
//   // console.log(`breedDetails: ${data}`);
//   return data;
// };
// const logError = (error) => {
//   // console.log(error);
//   return undefined;
// };

// console.log(
//   // breedDetails('Tiger')
//   breedDetails('Bombay')
// );

module.exports = { breedDetails };