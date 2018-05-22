'use strict';

function amount_even(collection) {
  return collection
    .filter(number => number % 2 === 0)
    .reduce((sum, element) => sum + element, 0);
}

module.exports = amount_even;
