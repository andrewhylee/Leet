/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // base case 1
  if (piles.length === 1) return Math.ceil(piles[0] / h);

  let total = 0;
  let max = 0;
  for (const bananas of piles) {
    total += bananas;
    if (bananas > max) max = bananas;
  }
  let min = Math.ceil(total / h);
  let k = Number.MAX_VALUE;

  // base case 2
  if (piles.length === h) return max;

  // perform binary search on the range until the target is hit
  while (min <= max) {
    let mid_guess = Math.floor((min + max) / 2);
    let result = 0;
    for (const bananas of piles) {
      result += Math.ceil(bananas / mid_guess);
    }
    if (result > h) {
      min = mid_guess + 1;
    } else {
      k = Math.min(k, mid_guess);
      max = mid_guess - 1;
    }
  }
  return k;
};
