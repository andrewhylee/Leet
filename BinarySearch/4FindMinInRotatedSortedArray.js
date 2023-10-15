/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin_ByDrew = function (nums) {
  let beg = 0;
  let end = nums.length - 1;
  if (end === 0) return nums[0];
  if (nums[beg] < nums[end]) return nums[0];

  // begin bin-search
  const binSearch = (beg, end) => {
    let mid = Math.floor((beg + end) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    while (beg < end) {
      // if mid is higher than beginning, its btw mid & end - take the right side
      // if mid is lower than beginning, its btw beg & mid - take the left side
      if (nums[mid] > nums[beg]) {
        return binSearch(mid + 1, end);
      } else {
        return binSearch(beg, mid);
      }
    }
  };

  return binSearch(beg, end);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin_Accepted = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};
