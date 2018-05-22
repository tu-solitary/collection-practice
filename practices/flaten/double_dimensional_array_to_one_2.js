'use strict';

function double_to_one(collection) {
  return collection.reduce(function (result, element) {
    if (Array.isArray(element)) {
      element.forEach(pushUnique(result))
    } else {
      pushUnique(result)(element)
    }
    return result;
  }, []);

  function pushUnique(arr) {
    return function (element) {
      if (!arr.includes(element)) {
        arr.push(element);
      }
      return arr;
    }
  }
}

module.exports = double_to_one;
