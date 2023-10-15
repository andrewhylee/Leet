/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const iter = (n1, n2, rest = 0) => {
    if (!n1 && !n2 && !rest) return null;
    const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
    const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
  };
  return iter(l1, l2);
};

// var addTwoNumbers_byDrew = function(l1, l2) {
//     let head
//     let res = null
//     let tempDigit
//     let carryOver = 0
//     while(l1 !== null || l2 !== null){
//         if (!l1){
//             tempDigit = l2.val + carryOver
//             carryOver = Math.floor(tempDigit / 10)
//             tempDigit = tempDigit % 10

//             l2 = l2.next

//         }else if (!l2){
//             tempDigit = l1.val + carryOver
//             carryOver = Math.floor(tempDigit / 10)
//             tempDigit = tempDigit % 10

//             l1 = l1.next

//         }else {
//             tempDigit = l1.val + l2.val + carryOver
//             carryOver = Math.floor(tempDigit / 10)
//             tempDigit = tempDigit % 10

//             l1 = l1.next
//             l2 = l2.next
//         }

//         if(res !== null) {
//             res.next = new ListNode(tempDigit)
//             res = res.next
//         }
//         else {
//             res = new ListNode(tempDigit)
//             head = res
//         }
//     }

//     if(carryOver > 0){
//         res.next = new ListNode(carryOver)
//     }

//     return head

// };
