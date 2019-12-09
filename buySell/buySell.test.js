const { buySell, isPeak, isValley } = require("./buySell.js");

xdescribe("isPeak", () => {
  it("Should identify peaks", () => {
    let a = [4, 5, 3];
    expect(isPeak(a, 0)).toBe(false);
    expect(isPeak(a, 1)).toBe(true);
    expect(isPeak(a, 2)).toBe(false);
    a = [4, 5, 5, 3];
    expect(isPeak(a, 0)).toBe(false);
    expect(isPeak(a, 1)).toBe(false);
    expect(isPeak(a, 2)).toBe(true);
    expect(isPeak(a, 3)).toBe(false);
    a = [5, 4, 3];
    expect(isPeak(a, 0)).toBe(true);
    expect(isPeak(a, 1)).toBe(false);
    expect(isPeak(a, 2)).toBe(false);
    a = [3, 4, 5];
    expect(isPeak(a, 0)).toBe(false);
    expect(isPeak(a, 1)).toBe(false);
    expect(isPeak(a, 2)).toBe(true);
  });
});

describe("isValley", () => {
  it("Should identify valleys", () => {
    let a = [3, 2, 5];
    expect(isValley(a, 0)).toBe(false);
    expect(isValley(a, 1)).toBe(true);
    expect(isValley(a, 2)).toBe(false);
    a = [4, 3, 3, 4];
    expect(isValley(a, 0)).toBe(false);
    expect(isValley(a, 1)).toBe(false);
    expect(isValley(a, 2)).toBe(true);
    expect(isValley(a, 3)).toBe(false);
    a = [3, 4, 5];
    expect(isValley(a, 0)).toBe(true);
    expect(isValley(a, 1)).toBe(false);
    expect(isValley(a, 2)).toBe(false);
    a = [5, 4, 3];
    expect(isValley(a, 0)).toBe(false);
    expect(isValley(a, 1)).toBe(false);
    expect(isValley(a, 2)).toBe(true);
  });
});

describe("buySell", () => {
  it("Should find the maximum profit", () => {
    expect(buySell([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(buySell([1, 2, 3, 4, 5])).toBe(4);
  });

  it("Should know when not to buy at all", () => {
    expect(buySell([7, 6, 4, 3, 1])).toBe(0);
  });
});
