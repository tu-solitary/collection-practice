
// 这里理解为26进制表示方法
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function numberToLetters(num) {
  let bits = [];
  do {

    bits.unshift(LETTERS[--num % 26]);
    num = Math.floor(num / 26);

  } while(num > 0);

  return bits.join('');
}



module.exports = {
  numberToLetters,
  LETTERS,
}
