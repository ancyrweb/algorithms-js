const fn = require("../longestRepeatingPattern");

it("get the longest repeating pattern", () => {
  expect(fn([])).toEqual(null);
  expect(fn([1, 2, 3])).toEqual(null);
  expect(fn([1, 2, 3, 1, 2])).toEqual([1, 2]);
  expect(fn([4, 3, 0, 1, 0, 1, 4, 2])).toEqual([0, 1]);
  expect(fn([4, 3, 0, 1, 0, 1, 4, 3, 0])).toEqual([4, 3, 0]);
  expect(fn([3, 1, 5, 6, 1, 5, 9])).toEqual([1, 5])
  expect(fn([3, 1, 5, 7, 0, 8, 9, 5, 7, 8, 9])).toEqual(null);
  expect(fn([6, 3, 5, 8, 0, 6, 3, 5, 8, 8, 9])).toEqual([6, 3, 5, 8])
  expect(fn([5, 3, 5, 3, 9, 5, 3, 5, 3, 9])).toEqual([5, 3, 5, 3, 9])
  expect(fn([5, 3, 4, 3, 5, 3, 4, 5, 3, 4])).toEqual([5, 3, 4])

});
