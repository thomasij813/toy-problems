const missingNumber = require("./missingNumber.js");

describe("missingNumber", () => {
  it("Should find the missing number", () => {
    expect(missingNumber([0, 1, 3])).toBe(2);
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });
});
