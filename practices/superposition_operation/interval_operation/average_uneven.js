'use strict';

function average_uneven(collection) {
  let oddNumbers = collection
    .filter(number => number % 2 === 1);
  let total = oddNumbers.reduce((sum, element) => sum + element, 0);
  return total / oddNumbers.length;
}

module.exports = average_uneven;
