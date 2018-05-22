'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((sum, element) => sum + element, 0);
}

module.exports = calculate_elements_sum;

