const removeDuplicates = require("./removeDuplicates.js");

describe("removeDuplicates", () => {
  it("Should remove duplicates from an array in place", () => {
    let array = [1, 1, 1, 3, 3, 6, 6, 6];
    removeDuplicates(array);
    expect(array).toEqual([1, 3, 6]);
  });

  it("Should return the lenght of the new array", () => {
    let array = [1, 1, 1, 3, 3, 6, 6, 6];
    expect(removeDuplicates(array)).toBe(3);
  });
});
