/**
 * 9 - Longest Consecutive Sequence
 * Given Array of unsorted numbers,
 * Find the Longest Consecutive Sequence
 *
 * @param {[number]} nums
 * @return {number}
 */

const longestConsecutiveSequence = (nums) => {
  let maxSeqCount = 0;
  let numSet = new Set(nums);
  for (const num of numSet) {
    // Skip until we're at the lowest number of the streak
    let prevNum = num - 1;
    if (numSet.has(prevNum)) continue;

    // Keep count of the streak
    let [currNum, count] = [num, 1];

    // Option #1
    // let isStreak = () => numSet.has(currNum + 1);
    // while (isStreak()) {
    //   currNum++;
    //   count++;
    // }

    // Option #2
    while (numSet.has(currNum + 1)) {
      currNum++;
      count++;
    }
    maxSeqCount = Math.max(maxSeqCount, count);
  }
  return maxSeqCount;
};

console.log(
  longestConsecutiveSequence([100, 4, 200, 3, 1, 2]), // Ans: 4
  longestConsecutiveSequence([0, 4, 8, 3, 7, 1, 5, 6, 2]) // Ans: 9
);
