function median(numbers) {
    let len = numbers.length;
    if (len % 2 === 1) {
      return numbers[(len - 1) / 2];
    }
    return 0.5 * (numbers[len / 2] + numbers[len / 2 - 1]);
}

function sum(numbers) {
  return numbers.reduce((sum, element) => sum + element, 0);
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

module.exports = {
  sum,
  median,
  average,
}
