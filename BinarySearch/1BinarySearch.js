/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = binSearch(nums, target, 0, nums.length - 1);
  return result;
};

var binSearch = function (nums, target, left, right) {
  if (left >= right) return nums[right] === target ? right : -1;
  const mid = Math.floor((right - left) / 2) + left;
  if (nums[mid] === target) return mid;
  else {
    return Math.max(
      binSearch(nums, target, left, mid),
      binSearch(nums, target, mid + 1, right)
    );
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DEBUG LINES //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("left :", left, "| mid: ", mid, "| right: ", right);
// console.log("nums[mid]: ", typeof nums[mid], "| target: ", typeof target);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TESTING //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * For String Validation (i.e. Every Input)
 */
const rawCliInput = process.argv[2] ? process.argv[2] : null;
const rawCliInput2 = process.argv[3] ? process.argv[3] : null;

/**
 * For Number Conversion
 * NOTE: This doesn't validate on "675fegfeiwj"
 */
let parsedCliInput2 = parseInt(rawCliInput2);

/**
 * For Array Validation
 */
let parsedCliInput;
try {
  parsedCliInput = rawCliInput && JSON.parse(process.argv[2]);
} catch (err) {
  parsedCliInput = null;
}
const isArray = parsedCliInput && parsedCliInput.constructor === Array;

if (isArray && parsedCliInput2)
  console.log(search(parsedCliInput, parsedCliInput2));
else console.log("Please give this algorithm a valid input: A string");
