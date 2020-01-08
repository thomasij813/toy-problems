const binarySearch = require("./binarySearch.js");

describe("binarySearch", () => {
  it("Should find a value in an array", () => {
    const arr = [1, 2, 5, 8, 14, 25, 30, 31, 39, 82, 100];
    expect(binarySearch(arr, 82)).toBe(true);
    expect(binarySearch(arr, 30)).toBe(true);
    expect(binarySearch(arr, 105)).toBe(false);
    expect(binarySearch([], 1)).toBe(false);
    expect(binarySearch([0, 2], 1)).toBe(false);
    expect(binarySearch([0, 2], 2)).toBe(true);
  });
});
