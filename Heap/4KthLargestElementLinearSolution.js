// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// Official Submission - doesn't really count bec its not O(N)
// more like N O(log k)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue();
  for (const idx in nums) {
    if (idx < k) {
      minHeap.enqueue(nums[idx]);
    } else if (nums[idx] > minHeap.front().element) {
      minHeap.dequeue();
      minHeap.enqueue(nums[idx]);
    }
  }

  return minHeap.front().element;
};

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// Found Solution

var findKthLargest = function (nums, k) {
  const posArr = [];
  const negArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      if (posArr[nums[i]]) {
        posArr[nums[i]]++;
      } else {
        posArr[nums[i]] = 1;
      }
    } else {
      if (negArr[-nums[i]]) {
        negArr[-nums[i]]++;
      } else {
        negArr[-nums[i]] = 1;
      }
    }
  }

  for (let i = posArr.length - 1; i >= 0; i--) {
    if (posArr[i] === undefined) {
      continue;
    }
    if (posArr[i] >= k) {
      return i;
    } else {
      k -= posArr[i];
    }
  }
  for (let i = 1; i < negArr.length; i++) {
    if (negArr[i] === undefined) {
      continue;
    }
    if (negArr[i] >= k) {
      return -i;
    } else {
      k -= negArr[i];
    }
  }
};
