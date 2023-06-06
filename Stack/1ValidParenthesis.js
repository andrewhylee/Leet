/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const myStack = [];
  for (const char of s) {
    switch (char) {
      case "(":
      case "{":
      case "[":
        myStack.push(char);
        break;
      case ")":
        if (myStack.pop() !== "(") return false;
        break;
      case "}":
        if (myStack.pop() !== "{") return false;
        break;
      case "]":
        if (myStack.pop() !== "[") return false;
        break;
      default:
        return false; // invalid string input
        break;
    }
  }

  return myStack.length === 0 ? true : false;
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

if (rawCliInput) console.log(isValid(rawCliInput));
else console.log("Please give this algorithm a valid input: A string");
