'use strict';

const numberToLetters = require("../utils/letters").numberToLetters;

function get_letter_interval_2(number_a, number_b) {
  let needReverse = false;
  let letters = []

  if(number_a > number_b) {
    needReverse = true;
    [number_a, number_b] = [number_b, number_a];
  }
  while(number_a++ <= number_b) {
    letters.push(numberToLetters(number_a - 1));
  }
  return needReverse ? letters.reverse(): letters;
}


module.exports = get_letter_interval_2;

