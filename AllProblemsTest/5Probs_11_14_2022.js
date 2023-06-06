// /** Solution 1: Contains Numeric Duplicates --> t or f*/

// const containsDuplicate = (nums) => {
//   const myset = new Set(nums);
//   return myset.size === nums.length;
// };

// console.log(containsDuplicate([15, 6, 4, 3, 8, 9, 6]));
// console.log(containsDuplicate([15, 6, 4, 3, 8, 9, 60]));

/** Solution 2: Anagrams tell whether 2 strings are --> t or f */

console.log(isAnagram("hello", "lloeh"));
console.log(isAnagramHashMap("yellow", "bellow"));

// /** Solution 3: Two Sum - Find 2 index of integers that sum up to target --> [num, num] */
// console.log(twoSum([2, 7, 4, 3], 9));
// console.log(twoSum([8, 7, 4, 3], 9));

// /** Solution 4: Group Similar Anagrams into its own arrays --> arr of arr */
// console.log(groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"]));

// /** Solution 5: Top k frequent Numbers ---> [nums] */
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(
//   topKFrequent(
//     [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 1, 1, 1, 2, 2, 3],
//     3
//   )
// );
// console.log(topKFrequent([1], 1));
