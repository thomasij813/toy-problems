const rotateArray = require("./rotateArray.js");

describe("rotateArray", () => {
  it("Should rotate the array", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const expectedOutput = [5, 6, 7, 1, 2, 3, 4];
    expect(rotateArray(input, 3)).toEqual(expectedOutput);
    expect(input).toEqual(output);
  });
});
