// General Binary Tree Code
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const a1 = new TreeNode(5);
const a2 = new TreeNode(10);
const a3 = new TreeNode(20);
const a4 = new TreeNode(30);
const a5 = new TreeNode(40, a1, a2);
const a6 = new TreeNode(50, a3, a4);
const a7 = new TreeNode(60, a5, a6);
// console.log("ListNode", e);

/**
 *                 60
 *              /      \
 *           40         50
 *          /   \      /   \
 *        5     10    20    30
 */

function In_Order_Traversal(givenTreeNode) {
  if (!givenTreeNode || !givenTreeNode.val) return;

  process.stdout.write(JSON.stringify(givenTreeNode.val) + " ");

  In_Order_Traversal(givenTreeNode.left);

  In_Order_Traversal(givenTreeNode.right);
  return;
}

function Pre_Order_Traversal(givenTreeNode) {
  if (!givenTreeNode || !givenTreeNode.val) return;

  Pre_Order_Traversal(givenTreeNode.left);

  process.stdout.write(JSON.stringify(givenTreeNode.val) + " ");

  Pre_Order_Traversal(givenTreeNode.right);
  return;
}

function Post_Order_Traversal(givenTreeNode) {
  if (!givenTreeNode || !givenTreeNode.val) return;

  Post_Order_Traversal(givenTreeNode.left);

  Post_Order_Traversal(givenTreeNode.right);

  process.stdout.write(JSON.stringify(givenTreeNode.val) + " ");
  return;
}

// In_Order_Traversal(a7);
// console.log("");

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
 * @return {TreeNode}
 */

// if left or right doesn't exist, then
// use null for the non-existent one
var invertTree = function (root) {
  if (!root) return root;
  let temp;
  if (!root.left && root.right) {
    root.left = root.right;
    root.right = null;
    invertTree(root.left);
  } else if (root.left && !root.right) {
    root.right = root.left;
    root.left = null;
    invertTree(root.right);
  } else if (root.left && root.right) {
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};
var invertTree_InputAsArray = function (root) {
  invertTree_InputAsArray_Helper(root, 0);
  return root;
};

var invertTree_InputAsArray_Helper = function (root, idx) {
  //   if (idx >= root.length || !root[idx]) return;
  //   let temp;
  //   if (root[2 * idx + 1] && root[2 * idx + 2]) {
  //     temp = root[2 * idx + 1];
  //     root[2 * idx + 1] = root[2 * idx + 2];
  //     root[2 * idx + 2] = temp;
  //     invertTree_InputAsArray_Helper(root, 2 * idx + 1);
  //     invertTree_InputAsArray_Helper(root, 2 * idx + 2);
  //   }
  //   if (idx >= root.length || !root[idx]) return;
  //   let temp;
  //   if (root[2 * idx + 1] && root[2 * idx + 2]) {
  //     temp = root[2 * idx + 1];
  //     root[2 * idx + 1] = root[2 * idx + 2];
  //     root[2 * idx + 2] = temp;
  //     invertTree_InputAsArray_Helper(root, 2 * idx + 1);
  //     invertTree_InputAsArray_Helper(root, 2 * idx + 2);
  //   }
};

var InvertTree_Iteratively = function (root) {
  // Assume we are given a full binary tree
  if (!root || root.length === 0) return root;
  let powerOf2 = Math.log2(root.length + 2);
  // skip the first guy
  for (i = 2; i <= powerOf2; i++) {
    let startIndex = Math.pow(2, i - 1) - 1;
    let endIndex = Math.pow(2, i) - 2;
    for (
      j = startIndex;
      j < startIndex + (endIndex - startIndex + 1) / 2;
      j++
    ) {
      console.log(root);
      let temp = root[j];
      root[j] = root[endIndex - (j - startIndex)];
      root[endIndex - (j - startIndex)] = temp;
    }
  }
  return root;
};

// invertTree(a7);

// In_Order_Traversal(a7);
// console.log("");

// Pre_Order_Traversal(a7);
// console.log("");
// Post_Order_Traversal(a7);
// console.log("");

// console.log(JSON.stringify(invertTree_InputAsArray([4, 2, 7, 1, 3, 6, 9])));
console.log(JSON.stringify(InvertTree_Iteratively([4, 2, 7, 1, 3, 6, 9])));
