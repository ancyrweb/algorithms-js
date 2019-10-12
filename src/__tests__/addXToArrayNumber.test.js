const fn = require("../addXToArrayNumber");

it("should add x to the array", () => {
  expect(fn([], 1)).toEqual([1]);
  expect(fn([0], 1)).toEqual([1]);
  expect(fn([1], 1)).toEqual([2]);
  expect(fn([1, 2], 2)).toEqual([1, 4]);
  expect(fn([1, 8], 2)).toEqual([2, 0]);
  expect(fn([1, 8], 4)).toEqual([2, 2]);
  expect(fn([1, 8], 10)).toEqual([2, 8]);
  expect(fn([1, 8], 51)).toEqual([6, 9]);
  expect(fn([1, 8], 54)).toEqual([7, 2]);
  expect(fn([1, 0, 0], 25)).toEqual([1, 2, 5]);
  expect(fn([1, 0, 9, 9], 11)).toEqual([1, 1, 1, 0]);
  expect(fn([9, 9, 9, 9], 2)).toEqual([1, 0, 0, 0, 1]);
  expect(fn([], 1234)).toEqual([1, 2, 3, 4]);
  expect(fn([1, 2], 1234)).toEqual([1, 2, 4, 6]);


});
