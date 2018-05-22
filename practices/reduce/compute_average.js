'use strict';

function compute_average(collection) {
  return collection.reduce((sum, element) => sum + element, 0) / collection.length;
}

module.exports = compute_average;

