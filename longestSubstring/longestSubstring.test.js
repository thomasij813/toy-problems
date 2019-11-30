const longestSubstring = require("./longestSubstring.js");

describe("longestSubstring", () => {
  it("Should return the length of the longest substring with no repeating characters", () => {
    expect(longestSubstring("abcabcbb")).toBe(3);
    expect(longestSubstring("bbbbb")).toBe(1);
    expect(longestSubstring("pwwkew")).toBe(3);
    expect(longestSubstring("dvdf")).toBe(3);
    expect(longestSubstring("asjrgapa")).toBe(6);
  });
});
