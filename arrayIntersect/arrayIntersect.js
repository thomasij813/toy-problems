// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

const arrayIntersect = (arr1, arr2) => {
  let shorter;
  let longer;

  if (arr1.length < arr2.length) {
    shorter = arr1;
    longer = arr2;
  } else {
    shorter = arr2;
    longer = arr1;
  }

  let obj = shorter.reduce((accum, curr) => {
    if (!accum[curr]) {
      accum[curr] = 1;
    } else {
      accum[curr] += 1;
    }
    return accum;
  }, {});

  return longer.reduce((accum, curr) => {
    if (obj[curr]) {
      accum.push(curr);
      obj[curr] -= 1;
    }
    return accum;
  }, []);
};

module.exports = arrayIntersect;
