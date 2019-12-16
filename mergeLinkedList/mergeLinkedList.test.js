const mergeLinkedLists = require("./mergeLinkedList.js");

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

describe("mergeLinkedLists", () => {
  it("Should merge two linked lists", () => {
    const ll1 = linkTheList([5, 10, 15, 20, 25]);
    const ll2 = linkTheList([3, 6, 9, 12, 15, 18, 21]);
    const expectedOutput = [5, 3, 10, 6, 15, 9, 20, 12, 25, 15];
    expect(mapLinkedList(mergeLinkedLists(ll1, ll2))).toEqual(expectedOutput);
  });
});
