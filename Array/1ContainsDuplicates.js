/**
 * Contains Duplicate Problem
 * HashSet - Time O(N) | Space O(N)
 * @param {number[]} nums
 * @returns {boolean}
 */

var containsDuplicate2 = (nums) => {
  const numSet = new Set(nums);
  const isEqual = numSet.size === nums.length;
  return !isEqual;
};

var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

var containsDuplicateEarlyExit = (nums) => {
  const numSet = new Set();
  for (const num of nums) {
    if (numSet.has(num)) return true;
    numSet.add(num);
  }
  return false;
};

// console.log(true);
console.log(containsDuplicate([15, 6, 4, 3, 8, 9, 6]));
console.log(containsDuplicate([15, 6, 4, 3, 8, 9, 60]));
