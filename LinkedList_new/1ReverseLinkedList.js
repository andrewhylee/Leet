// General Linked List Code
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const a = new ListNode(5);
const b = new ListNode(10, a);
const c = new ListNode(20, b);
const d = new ListNode(30, c);
const e = new ListNode(40, d);
// console.log("ListNode", e);

function traverse(givenListNode) {
  process.stdout.write(JSON.stringify(givenListNode.val));
  if (givenListNode.next) {
    process.stdout.write(" -> ");
    traverse(givenListNode.next);
  } else {
    console.log("");
    return;
  }
  return;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// I could use Stack
// Or I could just use a few temp mem storage

const reverseList = function (head) {
  let prev = head;
  let curr = head.next;
  prev.next = null;
  reverseHelper(prev, curr);
};

const reverseHelper = function (prev, curr) {
  let prev2 = curr;
  let curr2 = curr.next;
  curr.next = prev;
  if (!curr2) return;
  return reverseHelper(prev2, curr2);
};

traverse(e);

reverseList(e);

traverse(a);
