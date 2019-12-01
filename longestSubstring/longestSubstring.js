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

let longestSubstring = string => {
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

// Optimized

class Queue {
  constructor() {
    this.queue = {};
    this.queueHead = null;
    this.counter = 0;
    this.values = {};
  }

  enqueue(value) {
    this.counter += 1;
    this.queue[this.counter] = value;
    if (!this.queueHead) {
      this.queueHead = this.counter;
    }

    if (this.values[value]) {
      this.recuriveDequeue(value);
    }

    this.values[value] = true;
  }

  recuriveDequeue(value) {
    const dequeuedValue = this.dequeue();
    if (dequeuedValue !== value) {
      this.recuriveDequeue(value);
    }
  }

  dequeue() {
    if (!this.queueHead) {
      return null;
    }

    const value = this.queue[this.queueHead];
    delete this.queue[this.queueHead];

    this.values[value] = false;

    const nextQueueHead = this.queueHead + 1;
    this.queueHead = nextQueueHead > this.counter ? null : nextQueueHead;

    return value;
  }

  getQueue() {
    return this.queue;
  }

  getQueueLength() {
    if (!this.queueHead) {
      return 0;
    }

    return this.counter - this.queueHead + 1;
  }
}

longestSubstring = string => {
  let q = new Queue();
  let longestCount = 0;
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    q.enqueue(character);
    const queueLength = q.getQueueLength();
    if (queueLength > longestCount) {
      longestCount = queueLength;
    }
  }
  return longestCount;
};

module.exports = { longestSubstring, Queue };
