const arrayIntersect = require("./arrayIntersect.js");

describe("arrayIntersect", () => {
  it("Should find the first intersection between two arrays", () => {
    const arr1 = [4, 9, 5];
    const arr2 = [9, 4, 9, 8, 4];
    expect(arrayIntersect(arr1, arr2)).toEqual([4, 9]);
  });
});
