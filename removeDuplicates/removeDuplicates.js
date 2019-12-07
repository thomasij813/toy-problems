const removeDuplicates = numbers => {
  let count = 0;
  let numTracker = null;
  for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
    if (numTracker === number) {
      numbers.splice(i, 1);
    } else {
      numTracker = number;
      count += 1;
    }
  }
  return count;
};

module.exports = removeDuplicates;
