// Given a string, find the length of the longest substring without repeating
// characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not
// a substring.

// Unoptimized solution

const longestSubstring = string => {
  let currentHash = {};
  let longestCount = 0;
  let currentCount = 0;

  const assessCharacter = character => {
    if (currentHash[character]) {
      currentHash = {};
      currentCount = 0;
    }

    currentHash[character] = true;
    currentCount += 1;

    if (currentCount > longestCount) {
      longestCount = currentCount;
    }
  };

  for (let i = 0; i < string.length; i++) {
    currentHash = {};
    currentCount = 0;
    for (let j = i; j < string.length; j++) {
      const character = string[j];
      assessCharacter(character);
    }
  }

  return longestCount;
};

// Optimization plan:
// Keep track of substring in a stack.
// Everytime a letter is encountered, add it to the end of the stack.
// The stack should also have an object keeping track of letters in it (object)
// When a repeat is found, start popping off letters from the top of the stack
// until the repeat letter is found (remove it also, but stop). As letters are
// popped off the stack, remove them from the tracking object
// As elements are added and removed from the stack, keep track of its length.
// Everytime an element is added/removed, check to see if it exceeds the max
// length encountered and update as needed.

module.exports = longestSubstring;
