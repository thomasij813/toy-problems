const reverseKGroup = require("./reverseKGroup.js");

const ListNode = function(val) {
  this.val = val;
  this.next = null;
};

const linkTheList = vals => {
  let tail = null;
  let head = null;

  vals.forEach(val => {
    const node = new ListNode(val);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  });

  return head;
};

const forEachNode = (node, callback) => {
  callback(node.val);

  if (node.next) {
    forEachNode(node.next, callback);
  }
};

const mapLinkedList = node => {
  const out = [];
  forEachNode(node, val => out.push(val));
  return out;
};

describe("reverseKGroup", () => {
  it("Should reverse in groups of k elements of a linked list", () => {
    const vals = [1, 2, 3, 4, 5];
    let head = linkTheList(vals);
    expect(mapLinkedList(reverseKGroup(head, 2))).toEqual([2, 1, 4, 3, 5]);
    head = linkTheList(vals);
    expect(mapLinkedList(reverseKGroup(head, 3))).toEqual([3, 2, 1, 4, 5]);
  });

  it("Should return null when no linked list is provided", () => {
    expect(reverseKGroup(null, 1)).toBeNull();
  });

  it("Should not fail when the linked the second argument is a multiple of the linked list length", () => {
    const vals = [1, 2, 3];
    let head = linkTheList(vals);
    expect(mapLinkedList(reverseKGroup(head, 3))).toEqual([3, 2, 1]);
  });
});
// write a test for reverseKGroup with Jest or Mocha
