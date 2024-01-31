// My own solution - 46.60 % after MAD debugging - kinda surprising

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  // Assume: dont know where it starts
  let freq = {};
  let min = Number.MAX_SAFE_INTEGER;
  let max = -1;
  for (const i of hand) {
    freq[i] ? (freq[i] += 1) : (freq[i] = 1);
    i < min && (min = i);
    i > max && (max = i);
  }
  let elemsInOrder = Object.keys(freq).map((x) => parseInt(x));
  elemsInOrder.sort((a, b) => a > b);

  let lastK = elemsInOrder.length - groupSize;
  if (lastK < 0) return false;
  for (let k = 0; k <= lastK; k++) {
    if (k !== lastK && freq[elemsInOrder[k]] === 0) {
      continue;
    }
    let jLoopCounter = 1;
    let jLoopSum = 0;
    for (let j = k; j < k + groupSize; j++) {
      let currElem = elemsInOrder[j];
      if (
        currElem === undefined ||
        !freq[currElem] ||
        freq[currElem] === undefined
      )
        return false;
      if (jLoopCounter !== groupSize) {
        if (parseInt(currElem) + 1 !== parseInt(elemsInOrder[j + 1])) {
          return false;
        }
        if (freq[currElem] === 0) {
          return false;
        }
      }
      jLoopCounter++;
      freq[currElem] -= 1;
      jLoopSum += freq[currElem];
      if (freq[currElem] < 0) return false;
    }
    if (k === lastK && jLoopCounter === groupSize + 1 && jLoopSum === 0)
      return true;
    if (freq[elemsInOrder[k]] !== 0) k--;
  }
  return false;
};
