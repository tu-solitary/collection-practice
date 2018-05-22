'use strict';

function hybrid_operation(collection) {

//  每一个数*3 +2再算总和
  return collection
    .map(number => number * 3 + 2)
    .reduce((sum, element) => sum + element, 0);
}

module.exports = hybrid_operation;

