'use strict';

function rank_by_two_large_one_small(collection) {

  const sortedNumbers = collection.sort((a, b) => a - b);
  let result = []
  for (let i = 1; i <= Math.ceil(sortedNumbers.length / 3); i++) {
    if(sortedNumbers.length >= i * 3) {
      result.push(sortedNumbers[i * 3 - 2])
      result.push(sortedNumbers[i * 3 - 1])
      result.push(sortedNumbers[i * 3 - 3])
    } else {
      result = result.concat(sortedNumbers.slice(i * 3 - 3))
    }
  }

  return result;
}


module.exports = rank_by_two_large_one_small;
