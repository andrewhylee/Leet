/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search_Accepted = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[end] >= target && nums[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

var search_FAILED_byDrew = function (nums, target) {
  // Base Cases
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  if (nums.length === 2)
    return nums[0] === target ? 0 : nums[1] === target ? 1 : -1;

  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] > nums[left]) {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[right]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  console.log(`left: ${left}, right: ${right}`);

  return nums[left] === target ? left : -1;
  // 1. target is greater than mid - right side
  // 3. target is greater than mid, but less than right - right side, linear
  // 2. target is less than mid, but greater than left - left side, linear
  // 4. target is less than mid - left side
};
