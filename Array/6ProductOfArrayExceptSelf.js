/**
 * Product of Array Except Self
 * @param {[number]} nums
 * @return {[number]}
 * Time - O(n) | Space - O(n) "2n"
 *
 * BY DREW LEE
 */

const productOfArrayExceptSelf = (nums) => {
  const answer = [];
  const leftToRightProducts = [];
  const rightToLeftProducts = [];
  const lengthOfArray = nums.length;
  for (const idx in nums) {
    const backIndex = lengthOfArray - 1 - idx;

    leftToRightProducts.push(
      nums[idx] * (idx > 0 ? leftToRightProducts[idx - 1] : 1)
    );
    rightToLeftProducts[backIndex] =
      nums[backIndex] *
      (backIndex < lengthOfArray - 1 ? rightToLeftProducts[backIndex + 1] : 1);
  }

  for (const idx in nums) {
    const left = idx != 0 ? leftToRightProducts[idx - 1] : 1;
    const right =
      idx != lengthOfArray - 1 ? rightToLeftProducts[parseInt(idx) + 1] : 1;
    answer[idx] = left * right;
  }

  return answer;
};

/**
 * BETTER SOLUTION
 * @param {number} nums
 * @returns
 */
const productOfArrayExceptSelfBetterSolutions = (nums) => {
  const result = [];
  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = productSoFar;
    productSoFar *= nums[i];
  }
  productSoFar = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= nums[j];
  }
  return result;
};
console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
// console.log(productOfArrayExceptSelf([5, 6, 7, 8, 7, 6, 5]));
// console.log(productOfArrayExceptSelf([0, 6, 7, 8, 3, 0, 6, -5, -1]));
