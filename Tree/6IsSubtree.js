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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let result = false;
  if (!root) return result;

  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  if (root.val === subRoot.val) {
    result = result || isSameTree(root, subRoot);
  }

  return (
    result || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  );
};

/**
 * BFS Version (What I did b4 was DFS)
 * Using Queue
 */
const isSubtree = (root, subRoot) => {
  const areEqual = (tree, subTree) => {
    const queue = [[tree, subTree]];
    while (queue.length) {
      const [node1, node2] = queue.pop();
      if (!node1 && !node2) continue;
      if (!node1 || !node2 || node1.val !== node2.val) return false;
      queue.push([node1.right, node2.right], [node1.left, node2.left]);
    }
    return true;
  };
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    if (!node) continue;
    if (areEqual(node, subRoot)) return true;
    queue.push(node.right, node.left);
  }
  return false;
};
