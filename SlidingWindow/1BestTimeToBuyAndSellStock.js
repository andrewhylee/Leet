/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let max = 0;
  while (r < prices.length) {
    let rp = prices[r];
    let lp = prices[l];
    if (rp > lp) {
      profit = rp - lp;
      max = profit > max ? profit : max;
    } else {
      l = r;
    }
    r++;
  }
  return max;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TESTING //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rawCliInput = process.argv[2] ? process.argv[2] : null;

let parsedCliInput;
try {
  parsedCliInput = rawCliInput && JSON.parse(process.argv[2]);
} catch (err) {
  parsedCliInput = null;
}

const isArray = parsedCliInput && parsedCliInput.constructor === Array;

if (isArray) console.log(maxProfit(parsedCliInput));
else
  console.log("Please give this algorithm a valid input: An array of numbers");
