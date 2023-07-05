/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let ans = true;
  findMaxDepth(root);
  function findMaxDepth(root) {
    if (!root) return 0;
    let left = findMaxDepth(root.left);
    let right = findMaxDepth(root.right);
    if (left - right > 1 || left - right < -1) ans = false;
    return Math.max(left, right) + 1;
  }
  return ans;
};
