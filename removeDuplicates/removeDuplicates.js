const removeDuplicates = numbers => {
  let tracker = {};
  let count = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
    if (tracker[number]) {
      numbers.splice(i, 1);
    } else {
      tracker[number] = true;
      count += 1;
    }
  }
  console.log(numbers);
  return count;
};

module.exports = removeDuplicates;
