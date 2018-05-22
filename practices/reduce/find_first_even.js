'use strict';

function find_first_even(collection) {
  return collection.find(element => element % 2 === 0);
}

module.exports = find_first_even;

