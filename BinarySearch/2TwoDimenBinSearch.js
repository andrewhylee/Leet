/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix_Accepted_Solution = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mid_val = matrix[Math.floor(mid / n)][mid % n];

    if (mid_val === target) return true;
    else if (mid_val < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix_ByDrew_Whack = function (matrix, target) {
  const nrow = matrix.length;
  const ncol = matrix[0].length;
  const right = nrow * ncol - 1;
  const left = 0;

  let binarySearch = (leftIndex, rightIndex) => {
    const mid = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const { row, col } = indexToRowNCol(mid);
    if (target === matrix[row][col]) return true;
    else if (leftIndex === rightIndex) return false;
    else {
      return (
        binarySearch(leftIndex, mid, target) ||
        binarySearch(mid + 1, rightIndex, target)
      );
    }
  };

  let indexToRowNCol = (index) => {
    return { row: Math.floor(index / ncol), col: index % ncol };
  };

  return binarySearch(left, right);
};
