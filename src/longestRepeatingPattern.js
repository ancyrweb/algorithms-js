function equal(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function longestRepeatingPattern(numbers) {
  if (numbers.length === 0)
    return null;

  let longest = [];
  let foundDouble = false;
  const current = {
    index: null,
    length: 1,
  };

  for (let i = 0; i < numbers.length; i++) {
    const digit = numbers[i];

    if (current.index === null) {
      if (numbers.indexOf(digit) !== i) {
        current.index = numbers.indexOf(digit);
      }
    } else {
      if (digit === numbers[current.index + current.length]) {
        current.length++;
      } else {
        const next = numbers.slice(current.index, current.index + current.length);
        if (current.length > longest.length) {
          longest = next;
          current.index = null;
          current.length = 1;
          foundDouble = false;

          // Checking for the current number, exact same lines as 22 -> 24
          if (numbers.indexOf(digit) !== i) {
            current.index = numbers.indexOf(digit);
          }
        } else if (current.length === longest.length) {
          if (foundDouble === false && !equal(longest, next)) {
            foundDouble = true;
          }
        }
      }
    }
  }

  if (foundDouble)
    return null;

  if (current.index !== null) {
    const next = numbers.slice(current.index, current.index + current.length);
    if (current.length > longest.length) {
      return next;
    } else if (current.length === longest.length) {
      if (!equal(longest, next))
        return null;
    }
  }

  if (longest.length === 0)
    return null;

  return longest;
}

module.exports = longestRepeatingPattern;
