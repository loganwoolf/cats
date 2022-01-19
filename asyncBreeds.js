const fs = require('fs');

const breedDetailsGetter = function(breed, outputCallback) {
  // console.log('breedDetailsFromFile: Calling readfile...');

  fs.readFile(`./data/${breed}.txt`
    , 'utf8'
    , (error, data) => {

      // console.log(`In readfile's Callback: ${data.slice(0,20)}...`);

      !error ? outputCallback(data) : errorHandler(error);

    });

  // Issue: attempting to return things from here will not work either

};

const breedDetails = (data) => {
  console.log(`breedDetails: ${data.slice(0,40)}...`);
  return data;
};
const errorHandler = (error) => {
  console.log(`Error! Could not find file: ${error.path}`);
  // console.log(error);
};

breedDetailsGetter('Bombay', breedDetails);
breedDetailsGetter('Tiger', breedDetailsGetter);
// console.log('bombay return value: ', bombay);