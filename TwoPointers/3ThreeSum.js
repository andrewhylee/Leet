var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let answerString = "";
  if (nums[0] > 0 || nums.length < 3) return result;
  for (j = 1; j < nums.length - 1; j++) {
    let i = 0,
      k = nums.length - 1;
    while (i < j && j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        const stringVersion = JSON.stringify([nums[i], nums[j], nums[k]]);
        if (answerString.indexOf(stringVersion) == -1) {
          result.push([nums[i], nums[j], nums[k]]);
          answerString += stringVersion;
        }
        k--;
        i++;
        continue;
      } else if (sum > 0) {
        k--;
        continue;
      } else {
        i++;
        continue;
      }
    }
  }
  return result;
};

console.log(
  threeSum([-1, 0, 1, 2, -1, -4]),
  threeSum([1, 1, 0]),
  threeSum([0, 0, 0])
);
