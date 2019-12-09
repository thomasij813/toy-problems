// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

//Approach:

// Loop through the array finding the peaks and valleys.
// When there is a peak, sell. When there is a valley, buy.
// If the stock history ends on a valley, do not buy.

const isPeak = (array, i) => {
  const current = array[i];
  const before = array[i - 1];
  const after = array[i + 1];

  if (before <= current || before === undefined) {
    if (after < current || after === undefined) {
      return true;
    }
  }

  return false;
};

const isValley = (array, i) => {
  const current = array[i];
  const before = array[i - 1];
  const after = array[i + 1];

  if (before >= current || before === undefined) {
    if (after > current || after === undefined) {
      return true;
    }
  }

  return false;
};

const buySell = stockHistory => {
  let profit = 0;
  let ownStock = false;
  for (let i = 0; i < stockHistory.length; i += 1) {
    if (isPeak(stockHistory, i) && ownStock) {
      profit += stockHistory[i];
      ownStock = !ownStock;
    }

    if (isValley(stockHistory, i) && !ownStock) {
      if (i != stockHistory.length - 1) {
        profit -= stockHistory[i];
        ownStock = !ownStock;
      }
    }
  }
  return profit;
};

module.exports = { buySell, isPeak, isValley };
