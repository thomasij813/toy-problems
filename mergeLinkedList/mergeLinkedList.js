/* 
Merge two Linked Lists at alternating positions
Objective: Given two linked lists, merge one list into another at alternate
positions, if second link list has extra nodes, print them as well

Example:
5 -> 10 -> 15 -> 20 ->25 -> null
3 -> 6 ->9 -> 12 ->15 ->18 ->21 -> null

Output :
5 -> 3 -> 10 -> 6 ->15 -> 9 -> 20 -> 12 -> 25 ->15 -> null

Remaining List : 18 -> 21 -> null
*/

// const printLinkedList = list => {
//   console.log(list.val);
//   if (list.next) {
//     printLinkedList(list.next);
//   }
// };

const mergeLinkedLists = (list1, list2) => {
  let start = null;
  let tail = null;

  while (list1 && list2) {
    if (!start) {
      start = list1;
      tail = list2;
      list1 = list1.next;
      list2 = list2.next;
      start.next = tail;
    } else {
      tail.next = list1;
      tail = tail.next;
      list1 = list1.next;
      tail.next = list2;
      tail = tail.next;
      list2 = list2.next;
    }
  }

  tail.next = null;

  const remainder = list1 || list2;

  if (remainder) {
    printLinkedList(remainder);
  }

  return start;
};

module.exports = mergeLinkedLists;
