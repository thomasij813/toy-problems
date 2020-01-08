const binarySearch = (array, val) => {
  // base case (when all searches fail and array length is zero)
  if (array.length === 0) {
    return false;
  }

  const midIndex = Math.floor(array.length / 2);
  const midVal = array[midIndex];

  if (midVal === val) {
    return true;
  }

  let dir = midVal < val ? "right" : "left";

  if (dir === "right") {
    return binarySearch(array.slice(midIndex + 1), val);
  } else {
    return binarySearch(array.slice(0, midIndex), val);
  }
};

module.exports = binarySearch;
