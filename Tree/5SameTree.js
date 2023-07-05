/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let flag = true;
  inOrderTraversal(p, q);
  function inOrderTraversal(p, q) {
    if (!p && !q) return;
    if (!p || !q || p.val !== q.val) {
      flag = false;
      return;
    }
    inOrderTraversal(p.left, q.left);
    inOrderTraversal(p.right, q.right);
  }

  return flag;
};
