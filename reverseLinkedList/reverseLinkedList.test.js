const reverseLinkedList = require("./reverseLinkedList.js");

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

describe("reverseLinkedList", () => {
  it("Should reverse a linked list", () => {
    const vals = [1, 2, 3, 4, 5];
    const ll = linkTheList(vals);
    expect(mapLinkedList(reverseLinkedList(ll))).toEqual([5, 4, 3, 2, 1]);
  });
});
