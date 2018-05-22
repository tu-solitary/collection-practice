'use strict';
var even_asc_odd_desc = function(collection){
  let evens = collection.filter(number => number % 2 === 0);
  let odds = collection.filter(number => number % 2 === 1);

  let ascRule = (a, b) => a - b;
  let descRule = (a, b) => b - a;

  return evens.sort(ascRule).concat(odds.sort(descRule));
};
module.exports = even_asc_odd_desc;
