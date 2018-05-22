'use strict';
const {LETTERS} = require('../utils/letters');

function get_letter_interval(number_a, number_b) {
  let needReverse = number_b < number_a;

  if (needReverse) {
    return LETTERS.slice(number_b - 1, number_a).split('').reverse()
  } else {
    return LETTERS.slice(number_a - 1, number_b).split('')
  }

}

module.exports = get_letter_interval;
