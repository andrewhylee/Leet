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
 * @return {number}
 */
var goodNodes = function (root) {
  let ans = 0;

  const dfs_pre = (node, currentMax) => {
    // Preorder traversal - because we need to start from the root
    if (node.val >= currentMax) {
      currentMax = node.val;
      ans++;
    }

    node.left && dfs_pre(node.left, currentMax);
    node.right && dfs_pre(node.right, currentMax);
  };

  dfs_pre(root, -Infinity);

  return ans;
};
