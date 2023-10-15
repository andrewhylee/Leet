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
 * @return {number[]}
 */

function rightSideView(root) {
  const res = [];

  function traverse(node, level) {
    if (node?.val === undefined) return null;

    res[level] = node.val;

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return res;
}

var rightSideView_accepted = function (root) {
  if (!root) return [];
  let res = [];
  pre(root, 0);
  return res;

  function pre(node, he) {
    if (!node) return;
    res[he] = node.val;
    pre(node.left, he + 1);
    pre(node.right, he + 1);
  }
};

var rightSideView_byDrew = function (root) {
  const res = [];
  const priority = [];
  let counter = 10000;
  // let currLevel = 0
  const rightRecursive = (node, priorityNum, currLevel) => {
    if (!node) return;
    // const nextNode = node.right ? node.right : node.left
    if (!res[currLevel] || priorityNum >= priority[currLevel]) {
      res[currLevel] = node.val;
      priority[currLevel] = priorityNum;
    }
    // counter++
    const nextLevel = currLevel + 1;
    const partition = counter / 2 ** (currLevel + 1);
    rightRecursive(node.left, priorityNum - 2 * partition, nextLevel);
    rightRecursive(node.right, priorityNum - partition, nextLevel);
  };

  rightRecursive(root, 10000, 0);

  return res;
};

console.log(rightSideView([1, 2, 3, 5, 6]));
