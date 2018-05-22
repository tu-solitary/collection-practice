'use strict';

const median = require('../utils/numbers').median;

function compute_chain_median(collection) {
  let numbers = collection.split('->').map(str => parseInt(str, 10));
  return median(numbers);
}

module.exports = compute_chain_median;
