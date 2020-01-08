const singleNumber = require("./singleNumber.js");

describe("singleNumber", () => {
  it("Should find the single number in an array", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
});
