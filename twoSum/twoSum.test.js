const twoSum = require("./twoSum.js");

describe("twoSum", () => {
  it("Should return an array of indices that add to the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("Should return an empty array if no indicies add to the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 30;
    expect(twoSum(nums, target)).toEqual([]);
  });

  it("Should return an empty array if the nums array has less than two elements", () => {
    const nums = [1];
    const target = 5;
    expect(twoSum(nums, target)).toEqual([]);
  });
});
