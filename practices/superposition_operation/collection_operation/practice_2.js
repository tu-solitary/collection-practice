'use strict';

function hybrid_operation_to_uneven(collection) {

  return collection.filter(number => number %2 === 1)
    .map(number => number *3 + 2);
}

module.exports = hybrid_operation_to_uneven;

