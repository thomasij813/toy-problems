const buySell = require("./buySell.js");

describe("buySell", () => {
  it("Should find the maximum profit", () => {
    expect(buySell([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(buySell([1, 2, 3, 4, 5])).toBe(4);
  });

  it("Should know when not to buy at all", () => {
    expect(buySell([7, 6, 4, 3, 1])).toBe(0);
  });
});
