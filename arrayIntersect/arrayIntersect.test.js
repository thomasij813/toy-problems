const arrayIntersect = require("./arrayIntersect.js");

describe("arrayIntersect", () => {
  it("Should find the intersection between two arrays", () => {
    const arr1 = [4, 9, 5];
    const arr2 = [9, 4, 9, 8, 4];
    let output = arrayIntersect(arr1, arr2);
    expect(output.length).toBe(2);
    output.forEach(val => {
      expect([4, 9]).toContain(val);
    });
  });

  it("Should include as many results as there are shared numbers", () => {
    const arr1 = [1, 2, 2, 1];
    const arr2 = [2, 2];
    let output = arrayIntersect(arr1, arr2);
    expect(output.length).toBe(2);
    output.forEach(val => {
      expect([2, 2]).toContain(val);
    });
  });
});
