/**
 * Top K Frequent Elements
 * Given nums array, and k int
 * return "k" most frequent elements.
 * e.g. if "k" == 3,
 * return arrya of top 3 most frequent elements
 *
 * @param {[number]} nums
 * @param {number} k
 * @return {[number]}
 *
 * Must be better than: O(n log n)
 * n = array size
 */

const topKFrequent = (nums, k) => {
  if (k === 0 || nums.length === 0) return [];
  const obj = {};
  const res = [];
  const returnRes = [];
  let max_freq = 0;
  for (num of nums) {
    obj[num] ? obj[num]++ : (obj[num] = 1);
    max_freq = Math.max(max_freq, obj[num]);
  }
  for (const key in obj) {
    res[obj[key]] = key;
  }
  for (let i = max_freq; i > 0; i--) {
    if (!res[i] || res[i] === 0) continue;
    returnRes.push(res[i]);
    k--;
    if (k === 0) break;
  }

  return returnRes;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(
  topKFrequent(
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 1, 1, 1, 2, 2, 3],
    3
  )
);
console.log(topKFrequent([1], 1));

/**
 * Time Aim - O(n)
 * Make Freq Table
 * Keep a
 */
