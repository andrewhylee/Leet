// General Linked List Code
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const a = new ListNode(50);
const b = new ListNode(40, a);
const c = new ListNode(30, b);
const d = new ListNode(20, c);
const e = new ListNode(10, d);
// console.log("ListNode", e);

const a1 = new ListNode(45);
const b1 = new ListNode(35, a1);
const c1 = new ListNode(25, b1);
const d1 = new ListNode(23, c1);
const e1 = new ListNode(5, d1);

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

traverse(e);
traverse(e1);

function mergeTwoSortedLists(head1, head2) {
  let selectedNode;

  if (head1.val <= head2.val) {
    selectedNode = head1;
    mergeTwoSortedListsHelper(head1.next, head2, head1);
  } else {
    selectedNode = head2;
    mergeTwoSortedListsHelper(head1, head2.next, head2);
  }
  return selectedNode;
}

function mergeTwoSortedListsHelper(head1, head2, curr) {
  if (head2 === null || head1 === null) {
    return;
  } else if (head2 === null || head1.val <= head2.val) {
    curr.next = head1;
    mergeTwoSortedListsHelper(head1.next, head2, head1);
  } else {
    curr.next = head2;
    mergeTwoSortedListsHelper(head1, head2.next, head2);
  }
  return;
}

traverse(mergeTwoSortedLists(e, e1));
