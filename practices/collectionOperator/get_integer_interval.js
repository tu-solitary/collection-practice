'use strict';

function get_integer_interval(number_a, number_b) {
  let needReverse = false;
  if(number_b < number_a) {
    [number_a, number_b] = [number_b, number_a];
    needReverse = true;
  }

  let numbers = [];
  while(number_a <= number_b) {
    numbers.push(number_a++);
  }

  return needReverse ? numbers.reverse(): numbers;
  //在这里写入代码
}

module.exports = get_integer_interval;

