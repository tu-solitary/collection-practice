'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  function isDivisible(elementFromA) {
    return elementFromB => elementFromA % elementFromB === 0;
  }

  return collection_a.filter(elementFromA => collection_b.find(isDivisible(elementFromA)));
}

module.exports = choose_divisible_integer;
