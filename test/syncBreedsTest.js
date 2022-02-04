const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('Testing for breedDetails() (synchronous)', () => {

  it('returns breed details for Bombay breed'
    , () => {
      const expected = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(
        breedDetails('Bombay')
        , expected);
    });

  it('returns breed details for Balinese breed'
    , () => {
      const expected = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you've served them for dinner.";
      assert.equal(
        breedDetails('Balinese')
        , expected);
    });

  it('returns "Details not found." when an entry does not exist'
    , () => {
      const expected = "Details not found.";
      assert.equal(
        breedDetails('Dog')
        , expected);
      
    });


  
});
