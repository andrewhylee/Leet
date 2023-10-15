/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
  if (!head) return null;

  const oldToNew = new Map();

  let curr = head;
  while (curr) {
    oldToNew.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
    oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
    curr = curr.next;
  }

  return oldToNew.get(head);
};

// var copyRandomList_byDrew_didntWork = function(head) {
//     let oldHead = head
//     let newHead = null
//     let prevPtr = null
//     let ptr
//     while(oldHead){
//         ptr = new Node(oldHead.val, null, null)
//         // newHead && !prevPtr && (prevPtr = newHead)
//         !newHead && (newHead = ptr)
//         if(prevPtr){
//             prevPtr.next = ptr
//         }
//         oldHead = oldHead.next
//         prevPtr = ptr
//     }

//     let oldPtr = head
//     let newPtr = newHead

//     while(oldPtr){
//         let oldRandomFinder = head
//         let newRandomFinder = newHead
//         const randomNode = oldPtr.random
//         let tempcounter = 0
//         if(randomNode !== null){
//             while(oldRandomFinder){
//                 if(oldRandomFinder === randomNode || oldRandomFinder === null || tempcounter > 7) break
//                 oldRandomFinder.next
//                 newRandomFinder.next
//                 tempcounter++
//             }
//             newPtr.random = newRandomFinder
//         }

//         oldPtr = oldPtr.next
//         newPtr = newPtr.next
//     }

//     return newHead
// };
