const { longestSubstring, Queue } = require("./longestSubstring.js");

describe("queue", () => {
  const q = new Queue();
  it("Should have an enqueue method that adds elements to the queue", () => {
    q.enqueue("a");
    expect(q.getQueue()).toEqual({ 1: "a" });
    expect(q.values).toEqual({ a: true });
    q.enqueue("b");
    expect(q.getQueue()).toEqual({ 1: "a", 2: "b" });
    expect(q.values).toEqual({ a: true, b: true });
  });

  it("Should have a dequeue method that removes elements from the queue", () => {
    expect(q.dequeue()).toBe("a");
    expect(q.getQueue()).toEqual({ 2: "b" });
    expect(q.dequeue()).toBe("b");
    expect(q.getQueue()).toEqual({});
    expect(q.dequeue()).toBeNull();
    expect(q.getQueue()).toEqual({});
    expect(q.counter).toBe(2);
    expect(q.queueHead).toBeNull();
  });

  it("Should recursively dequeue when repeated elements are added to the queue", () => {
    q.enqueue("c");
    q.enqueue("d");
    q.enqueue("e");
    q.enqueue("d");
    expect(q.getQueue()).toEqual({ 5: "e", 6: "d" });
    q.enqueue("d");
    expect(q.getQueue()).toEqual({ 7: "d" });
  });

  it("Should have a getQueueLength method that returns the length of the queue", () => {
    expect(q.getQueueLength()).toBe(1);
    q.enqueue("e");
    q.enqueue("f");
    q.enqueue("g");
    expect(q.getQueueLength()).toBe(4);
    q.enqueue("g");
    expect(q.getQueueLength()).toBe(1);
    q.dequeue("g");
    expect(q.getQueueLength()).toBe(0);
  });
});

describe("longestSubstring", () => {
  it("Should return the length of the longest substring with no repeating characters", () => {
    expect(longestSubstring("abcabcbb")).toBe(3);
    expect(longestSubstring("bbbbb")).toBe(1);
    expect(longestSubstring("pwwkew")).toBe(3);
    expect(longestSubstring("dvdf")).toBe(3);
    expect(longestSubstring("asjrgapa")).toBe(6);
  });
});
