'use strict';

const sum = require("../../utils/numbers").sum;

function hybrid_operation_to_uneven(collection) {

  let numbers = collection.filter(number => number % 2 === 1)
    .map(element => element * 3 + 5);

  return sum(numbers);
}

module.exports = hybrid_operation_to_uneven;

