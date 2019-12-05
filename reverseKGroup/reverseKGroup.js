// Reverse Nodes in k-Group
// Level: Hard

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// Example:

// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

// Note:
// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Not in constant space

const reverseKGroup = (head, k) => {
  if (!head) {
    return null;
  }

  let holding = [];
  let newHead = null;
  let tail = null;

  const reverseNodes = function() {
    for (let i = holding.length - 1; i >= 0; i--) {
      const node = holding[i];
      if (!newHead) {
        newHead = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
      tail.next = null;
    }
  };

  const traverse = function(node) {
    holding.push(node);
    const nextNode = node.next;
    if (holding.length === k) {
      reverseNodes();
      holding = [];
    }
    if (nextNode) {
      traverse(nextNode);
    }
  };

  traverse(head);

  holding.forEach(node => {
    if (!newHead) {
      newHead = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
    tail.next = null;
  });

  return newHead;

  // iterate through the ll, keeping track of iteration number
  // for each node, increment the count and add the item to a holding array
  // when the count = k, its time to start updating nodes:
  // first, keep track of the next node somehow (this is going to get overwritten soon)
  // loop backwards through the holding array:
  // if head hasn't been defined, let it be this node. Set tail to be this node too.
  // otherwise, set tail.next equal to this node. Then set tail equal to this node.
  // Once that loop has finished, replace the array with an empty array
  // When all nodes have been iterated through, check the holding array.
  // if there are any nodes inside it, set the first one to the current tail's next.
  // return the head.
};

module.exports = reverseKGroup;
