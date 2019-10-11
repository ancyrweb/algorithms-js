const fn = require("../addOneToArrayNumber");

it("should add one to the array", () => {
  expect(fn([])).toEqual([1]);
  expect(fn([0])).toEqual([1]);
  expect(fn([1])).toEqual([2]);
  expect(fn([1, 2])).toEqual([1, 3]);
  expect(fn([1, 9])).toEqual([2, 0]);
  expect(fn([1, 9, 9])).toEqual([2, 0, 0]);
  expect(fn([1, 3, 9, 9])).toEqual([1, 4, 0, 0]);
  expect(fn([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
  expect(fn([9, 1, 9, 9])).toEqual([9, 2, 0, 0]);
})
