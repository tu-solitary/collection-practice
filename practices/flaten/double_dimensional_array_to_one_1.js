'use strict';

function double_to_one(collection) {
  return collection.reduce(function(result, element) {
    if (Array.isArray(element)) {
      result = result.concat(element)
    } else {
      result.push(element)
    }
    return result;
  }, [])
}

module.exports = double_to_one;
