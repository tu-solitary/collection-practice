'use strict';
const {LETTERS} = require('../utils/letters');

var number_map_to_word = function(collection){
  return collection.map(number => LETTERS[number - 1]);
};

module.exports = number_map_to_word;
