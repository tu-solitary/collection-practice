'use strict';
const average = require('../../../utils/numbers').average;

var calculate_average = function(collection){
  let evenNumbers = collection.filter((_, index) => index % 2 === 1);
  return average(evenNumbers);
};
module.exports = calculate_average;
