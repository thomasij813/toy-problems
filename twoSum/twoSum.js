// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// Example:
// twoSum([2, 7, 11, 15], 9) --> [0, 1]

// unoptimized

let twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i += 1) {
    let numOne = nums[i];
    for (let j = i + 1; j < nums.length; j += 1) {
      let numTwo = nums[j];
      if (numOne + numTwo === target) {
        return [i, j];
      }
    }
  }

  return [];
};

// optimized

twoSum = (nums, target) => {
  const hash = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const compliment = target - num;
    if (hash.hasOwnProperty(compliment)) {
      return [hash[compliment], i];
    }

    hash[num] = i;
  }

  return [];
};

module.exports = twoSum;
