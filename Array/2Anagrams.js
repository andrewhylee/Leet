const [_, __, s, t] = process.argv;

/**
 * Sorting
 * Time O( N * log(N) ) | Space O(N)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  return reorder(s) === reorder(t);
};

const reorder = (str) => {
  str
    .split("") // Time O(N) | Space O(N)
    .sort((a, b) => a.localeCompare(b)) // Time O(N * log(N) ) | Space O( log(N) )
    .join(""); // Time O(N) | Space O(N)
};

/**
 * HashMap - Frequency Counter
 * Time O(N) | Space O(N)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagramHashMap = (s, t, map = new Map()) => {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  addFrequency(s, map);
  subtractFrequency(t, map);

  return checkFrequency(map);
};

const addFrequency = (str, map) => {
  for (const char of str) {
    const count = (map.get(char) || 0) + 1;

    map.set(char, count);
  }
};

const subtractFrequency = (str, map) => {
  for (const char of str) {
    const count = (map.get(char) || 0) - 1;

    map.set(char, count);
  }
};

const checkFrequency = () => {
  for (const [char, count] of map) {
    const isEmpty = count === 0;
    if (!isEmpty) return false;
  }
  return true;
};

console.log(isAnagram(s, t));
console.log(isAnagramHashMap(s, t));
