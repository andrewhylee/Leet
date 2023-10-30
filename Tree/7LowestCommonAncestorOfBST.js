/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let max;
  let min;
  if (p.val > q.val) {
    max = p;
    min = q;
  } else {
    max = q;
    min = p;
  }
  const fcn = (root, min, max) => {
    if (root.val <= max.val && root.val >= min.val) return root;
    if (root.right && root.val < min.val) return fcn(root.right, min, max);
    else if (root.left && root.val > max.val) return fcn(root.left, min, max);
  };
  return fcn(root, min, max);
};
