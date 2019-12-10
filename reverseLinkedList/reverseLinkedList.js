/* Reverse Linked List
Reverse a singly linked list.
Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var linkedList = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(3);
linkedList.next.next.next = new ListNode(4);
linkedList.next.next.next.next = new ListNode(5);

const reverseLinkedList = (head, prev = null) => {
  const next = head.next;
  head.next = prev;
  prev = head;
  return next ? reverseLinkedList(next, prev) : prev;
};

module.exports = reverseLinkedList;
