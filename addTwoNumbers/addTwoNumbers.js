// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the
// number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
// function ListNode(val) {
//    this.val = val;
//    this.next = null;
// }

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = (l1, l2) => {
  let startSum = l1.val + l2.val;
  let rem = 0;

  if (startSum >= 10) {
    rem = 1;
    startSum -= 10;
  }

  let n = new ListNode(startSum);
  let head = n;
  let tail = n;

  l1Curr = l1.next;
  l2Curr = l2.next;

  while (l1Curr || l2Curr) {
    let l1Num = 0;
    let l2Num = 0;

    if (l1Curr && l1Curr.val) {
      l1Num = l1Curr.val || 0;
    }

    if (l2Curr && l2Curr.val) {
      l2Num = l2Curr.val || 0;
    }

    let sum = l1Num + l2Num + rem;
    if (sum >= 10) {
      rem = 1;
      sum -= 10;
    } else {
      rem = 0;
    }

    n = new ListNode(sum);
    tail.next = n;
    tail = n;

    if (l1Curr) {
      l1Curr = l1Curr.next;
    }

    if (l2Curr) {
      l2Curr = l2Curr.next;
    }
  }

  if (rem) {
    tail.next = new ListNode(rem);
  }

  return head;
};

module.exports = addTwoNumbers;
