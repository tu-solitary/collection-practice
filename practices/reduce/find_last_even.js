'use strict';

function find_last_even(collection) {
  let reverseIndex = collection.reverse().findIndex(element => element % 2 === 0);
  return collection.length - reverseIndex -1;
}

module.exports = find_last_even;
