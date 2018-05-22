'use strict';

function spilt_to_zero(number, interval) {
  number *= 10000; // 发现有运算丢失精度的问题
  interval *= 10000;
  let numbers = [number];
  while (number > 0) {
    number -= interval;
    numbers.push(number);
  }
  return numbers.map(num => num / 10000);
}

module.exports = spilt_to_zero;
