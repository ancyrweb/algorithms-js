/**
 * Inspired by https://www.youtube.com/watch?v=uQdy914JRKQ
 * Adds an arbitrary number to a number represented as an array.
 * The number 1234 is represented as [1, 2, 3, 4].
 * Adding 5 to it results in [1, 2, 3, 9].
 *
 * Algorithm
 * ----------
 * We split the amount into two parts : the decimal part (> 10) and the final digit.
 * E.g 199 is split into 19 and 9. 2001 into 200 and 1.
 * We add the final digit to the current entry in the number's array (using the index) and if there's a carry,
 * we increment the decimal part.
 * We then repeat this using the remaining left part until we've come across all the numbers.
 *
 * If we still have remaining left numbers, we add it to the left of the array
 * @param numbers
 * @param amount
 * @returns {*[]|number[]}
 */
function addXToArrayNumber(numbers, amount) {
  if (numbers.length === 0)
    numbers = [0];

  let index = numbers.length - 1;
  let leftPart = amount, rightPart = 0;
  while (index >= 0) {
    rightPart = leftPart % 10;
    leftPart = leftPart >= 10 ? Math.floor(leftPart / 10) : 0;

    if (numbers[index] + rightPart < 10) {
      numbers[index] += rightPart;
    } else {
      numbers[index] = numbers[index] + rightPart - 10;
      leftPart++;
    }

    index--;
  }

  if (leftPart) {
    if (leftPart < 10) {
      return [leftPart, ...numbers];
    } else {
      while (leftPart >= 10) {
        rightPart = leftPart % 10;
        leftPart = leftPart >= 10 ? Math.floor(leftPart / 10) : 0;
        numbers.unshift(rightPart);
      }
      if (leftPart) {
        numbers.unshift(leftPart);
      }
    }
  }

  return numbers;
}

module.exports = addXToArrayNumber;
