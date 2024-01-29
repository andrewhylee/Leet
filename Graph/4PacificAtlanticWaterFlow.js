/** My BAD Attempt ( didnt think of spiral down ) */
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // Take care of super simple cases: no elements || only 1 element
  if (heights.length === 1 && heights[0].length === 1) return [[0, 0]];
  let result = [];
  const rightMax = heights[0].length - 1;
  const bottomMax = heights.length - 1;
  const leftMax = 0;
  const topMax = 0;

  for (const r in heights) {
    for (const c in heights[0]) {
      let r2 = parseInt(r);
      let c2 = parseInt(c);
      if (checkRightBottom(r2, c2) && checkLeftTop(r2, c2))
        result.push([r2, c2]);
    }
  }

  function checkRightBottom(r, c) {
    if (r === bottomMax || c == rightMax) return true;
    const curr = heights[r][c];
    const right = heights[r][c + 1];
    const bottom = heights[r + 1][c];
    if (right <= curr && bottom <= curr) {
      return checkRightBottom(r, c + 1) || checkRightBottom(r + 1, c);
    } else if (right <= curr) {
      return checkRightBottom(r, c + 1);
    } else if (bottom <= curr) {
      return checkRightBottom(r + 1, c);
    } else return false;
  }

  function checkLeftTop(r, c) {
    if (r === topMax || c === leftMax) return true;
    const curr = heights[r][c];
    const left = heights[r][c - 1];
    const top = heights[r - 1][c];

    if (left <= curr && top <= curr) {
      return checkLeftTop(r, c - 1) || checkLeftTop(r - 1, c);
    } else if (left <= curr) {
      return checkLeftTop(r, c - 1);
    } else if (top <= curr) {
      return checkLeftTop(r - 1, c);
    } else return false;
  }
  return result;
};
