'use strict';

const LETTERS = require('../../utils/letters').LETTERS;

function even_to_letter(collection) {
  return collection
    .filter(number => number % 2 === 0)
    .map(number => LETTERS[number - 1]);
}

module.exports = even_to_letter;
