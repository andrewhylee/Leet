/**
 * 1 - Valid Palindrom
 * Given a string, make it only lowercase alphanumeric (0-9,a-z)
 * determine whether it is a palindrome
 *
 * @param {string} str
 * @return {boolean}
 */

const isPalindrome = (str) => {
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let end_i = str.length - 1;
  for (const i in str) {
    if (i > end_i) break;
    if (str.charAt(i) != str.charAt(end_i)) return false;
    end_i--;
  }
  return true;
};

console.log(
  isPalindrome("Hello Olleh:'''"),
  isPalindrome("racecar"),
  isPalindrome("rAcecarz")
);
