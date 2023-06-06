/**
 * 4 - Container with Most Water
 * @param {number[]} nums
 * @return {number[]}
 */

var containerWithMostWater = (nums) => {
  if (nums.length < 2) return [-1, -1];
  let maxArea = 0;

  for (let i = 0, j = nums.length - 1; i < j; ) {
    maxArea = Math.max(maxArea, (j - i) * Math.min(nums[i], nums[j]));
    if (nums[i] < nums[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

//Need to know runtime of min and max

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
