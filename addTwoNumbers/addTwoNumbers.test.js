const addTwoNumbers = require("./addTwoNumbers.js");

function ListNode(val) {
  this.val = val;
  this.next = null;
}

describe("addTwoNumbers", () => {
  it("Should add two numbres represented by a linked list", () => {
    const lnA = new ListNode(2);
    const lnB = new ListNode(4);
    const lnC = new ListNode(3);

    lnA.next = lnB;
    lnB.next = lnC;

    const lnD = new ListNode(5);
    const lnE = new ListNode(6);
    const lnF = new ListNode(4);

    lnD.next = lnE;
    lnE.next = lnF;

    const res = addTwoNumbers(lnA, lnD);
    expect(res.val).toBe(7);
    expect(res.next.val).toBe(0);
    expect(res.next.next.val).toBe(8);
  });
});
