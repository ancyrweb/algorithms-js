/**
 * Inspired by https://www.youtube.com/watch?v=uQdy914JRKQ
 * Adds one to a number represented as an array.
 * @param numbers
 * @param amount
 * @returns {*[]|number[]}
 */
function addOneToArrayNumber(numbers) {
  let index = numbers.length - 1;
  while (index >= 0) {
    if (numbers[index] < 9) {
      numbers[index]++;
      return numbers;
    }

    numbers[index] = 0;
    index--;
  }

  return [1, ...numbers];
}

module.exports = addOneToArrayNumber;
