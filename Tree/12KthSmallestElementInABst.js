var kthSmallest_accepted = function (root, k) {
  let n = 0;
  let stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    n += 1;
    if (n === k) return current.val;
    current = current.right;
  }
};

var kthSmallest_byDrew = function (root, k) {
  let ans = null;
  let queue = [];

  const def_inorder = (node) => {
    if (!node) return;

    def_inorder(node.left);
    queue.push(node);
    if (queue.length === k) ans = node.val;
    def_inorder(node.right);

    return;
  };

  def_inorder(root);

  return ans;
};
