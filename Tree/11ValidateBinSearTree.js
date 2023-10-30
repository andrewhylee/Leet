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

var isValidBST = function (root, lo = -Infinity, hi = Infinity) {
  if (!root) return true;
  let left = isValidBST(root.left, lo, root.val),
    right = isValidBST(root.right, root.val, hi);
  return left && right && root.val > lo && root.val < hi;
};

var isValidBST_byDrew = function (root) {
  const def_pre = (node, currMax, currMin) => {
    if (!node) return true;
    if (!(node.val < currMax && node.val > currMin)) return false;

    const leftNodeIsLess = node.left ? node.left.val < node.val : true; // true if child node doesnt exist
    const rightNodeIsMore = node.right ? node.right.val > node.val : true; // true if child node doesnt exist

    return (
      leftNodeIsLess &&
      rightNodeIsMore &&
      def_pre(node.left, node.val, currMin) &&
      def_pre(node.right, currMax, node.val)
    );
  };

  return def_pre(root, Infinity, -Infinity);
};
