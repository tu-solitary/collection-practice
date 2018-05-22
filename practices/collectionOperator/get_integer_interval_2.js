'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let isReverse = false;
  let evenNumbers = [];

  if(number_a > number_b) {
    [number_b, number_a] = [number_a, number_b];
    isReverse = true;
  }

  while(number_a <= number_b) {
    if(number_a % 2 == 0) {
      evenNumbers.push(number_a);
    }
    number_a++
  }
  return isReverse ? evenNumbers.reverse(): evenNumbers;
}

module.exports = get_integer_interval_2;
