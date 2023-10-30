/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];
  if (!root) return ans;
  ans.push([root.val]);
  const queue = [root];
  if (!root.left && !root.right) return ans;
  while (queue.length > 0) {
    const levelArr = [];
    const limit = queue.length;
    for (let i = 0; i < limit; i++) {
      const currNode = queue.shift();
      if (currNode.left) {
        levelArr.push(currNode.left.val);
        queue.push(currNode.left);
      }
      if (currNode.right) {
        levelArr.push(currNode.right.val);
        queue.push(currNode.right);
      }
    }
    if (levelArr.length !== 0) ans.push(levelArr);
  }
  return ans;
};
