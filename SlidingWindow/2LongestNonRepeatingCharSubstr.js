/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const myset = new Set();
  let l = 0;
  let r = 0;
  let len = 0;
  for (const i in s) {
    r = i;
    console.log("i: ", i, "| r: ", r, "| l: ", l);
    if (myset.has(s.charAt(i))) {
      console.log("inside", s.charAt(i));

      while (myset.has(s.charAt(i))) {
        myset.delete(s.charAt(l));
        l++;
      }
    }
    myset.add(s.charAt(i));
    len = Math.max(len, r - l);
  }
  return len + 1;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TESTING //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * For String Validation (i.e. Every Input)
 */
const rawCliInput = process.argv[2] ? process.argv[2] : null;

/**
 * For Array Validation
 */
// let parsedCliInput;
// try {
//   parsedCliInput = rawCliInput && JSON.parse(process.argv[2]);
// } catch (err) {
//   parsedCliInput = null;
// }
// const isArray = parsedCliInput && parsedCliInput.constructor === Array;

if (rawCliInput) console.log(lengthOfLongestSubstring(rawCliInput));
else console.log("Please give this algorithm a valid input: A string");
