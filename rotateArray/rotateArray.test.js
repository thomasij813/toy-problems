const rotateArray = require("./rotateArray.js");

describe("rotateArray", () => {
  it("Should rotate the array", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const expectedOutput = [5, 6, 7, 1, 2, 3, 4];
    expect(rotateArray(input, 3)).toEqual(expectedOutput);
    expect(input).toEqual(expectedOutput);

    const input2 = [1, 2];
    expect(rotateArray(input2, 3)).toEqual([2, 1]);
    expect(input2).toEqual([2, 1]);

    const input3 = [1, 2];
    expect(rotateArray(input3, 2)).toEqual([1, 2]);
    expect(input3).toEqual([1, 2]);
  });
});
