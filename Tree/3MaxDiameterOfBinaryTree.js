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
var diameterOfBinaryTree = function (root) {
  let final_diameter = 0;

  findMaxDepth(root);
  function findMaxDepth(root) {
    if (!root) return 0;
    let left_max = findMaxDepth(root.left);
    let right_max = findMaxDepth(root.right);
    let temp_diameter = left_max + right_max;
    if (temp_diameter > final_diameter) final_diameter = temp_diameter;

    return Math.max(left_max, right_max) + 1;
  }

  return final_diameter;
};
