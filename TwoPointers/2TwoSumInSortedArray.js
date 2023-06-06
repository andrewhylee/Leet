/**
 * 2 - Two Sum in Sorted Array
 * Array of numbers givne in NON-DESCENDING order
 * 1-INDEXED
 * Assume there EXISTS A SOLUTION
 * @param {[number]} nums
 * @param {number} target
 * @return {[number]}  --> indices of the two elements
 */

const twoSumInSortedArray = (nums, target) => {
  let sum;
  for (let [i, j] = [0, nums.length - 1]; i < j; ) {
    sum = nums[i] + nums[j];
    if (sum == target) {
      return [i + 1, j + 1];
    } else sum > target ? j-- : i++;
  }
};

console.log(
  twoSumInSortedArray([1, 2, 7, 8, 100, 101], 9), // Ans: [2,3]
  twoSumInSortedArray([-1, 0], -1), // Ans: [1,2]
  twoSumInSortedArray([-1, -1, 0, 5, 6, 7, 15], 13) // Ans: [5,6]
);
