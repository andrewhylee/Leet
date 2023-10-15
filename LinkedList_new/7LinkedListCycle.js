/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle_accepted = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};

var hasCycle_byDrew = function (head) {
  if (!head) return false;
  const mySet = new Set();
  mySet.add(head);
  head = head.next;
  while (head) {
    if (mySet.has(head)) return true;
    mySet.add(head);
    head = head.next;
  }
  return false;
};
