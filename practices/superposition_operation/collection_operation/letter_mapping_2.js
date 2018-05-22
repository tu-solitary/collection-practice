'use strict';

const average= require("../../utils/numbers").average;
const LETTERS= require('../../utils/letters').LETTERS;;

function average_to_letter(collection) {
  let averageValue = average(collection);
  return LETTERS[Math.ceil(averageValue) - 1];
}

module.exports = average_to_letter;

