const [_, __, string1, string2] = process.argv;

/**
 * Two Sum
 * Time - O(N) | Space - O(1)
 * @param{[number]} nums
 * @param{number} target
 * @return{boolean}
 *
 * Assume: No Repeat, If sol, only 1 sol.
 */

const twoSum = (nums, target) => {
  const myMap = new Map();
  for (let i in nums) {
    if (myMap.get(target - nums[i]) >= 0)
      return [parseInt(i), target - nums[i]];
    else myMap.set(nums[i], i);
  }
  return [-1, -1];
};

console.log(twoSum([2, 7, 4, 3], 9));
console.log(twoSum([8, 7, 4, 3], 9));
