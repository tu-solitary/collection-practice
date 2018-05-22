'use strict';

const {median} = require('../../utils/numbers');
const numberToLetters =require("../../utils/letters").numberToLetters;

function median_to_letter(collection) {

  let medianValue = Math.ceil(median(collection));
  return numberToLetters(medianValue);

}

module.exports = median_to_letter;
