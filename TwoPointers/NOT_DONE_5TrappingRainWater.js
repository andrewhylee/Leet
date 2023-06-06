/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //   let ascendedAlready = false
  //   let startOfValleyIndex;
  //   let endOfValleyIndex;
  //   let totalRain = 0;
  //   let tempBucket = 0

  // PLEASE IMPLEMNT ARRAY METHOD FIRST

  let leftMax = 0;
  let rightMax = 0;
  for (const i in height) {
    //     // Detect Start of Valley
    //     if (!startOfValleyIndex && height[i + 1] < height[i]) {
    //       startOfValleyIndex = i;
    //       continue;
    //     }
    //     // Ascending within valley
    //     if(startOfValleyIndex && height[i + 1] > height[i]){
    //         ascendedAlready = true
    //         tempBucket += height[startOfValleyIndex] - height[i]
    //     }
    //     // Detect End of Valley
    //     if(startOfValleyIndex && ascendedAlready && height[i + 1] < height[i]){
    //         ascendedAlready = false
    //         endOfValleyIndex = i
    //         // Adjusting calculation when beg peak > end peak
    //         if (height[startOfValleyIndex] > height[endOfValleyIndex]){
    //             tempBucket -= (height[startOfValleyIndex] - height[endOfValleyIndex]) * (endOfValleyIndex - startOfValleyIndex - 1) // excluding both endpoints
    //         }
    //     }
    //     // Descending within valley
    //     if(startOfValleyIndex){
    //         tempBucket += height[startOfValleyIndex] - height[i]
    //     }
    //     if (startOfValleyIndex && !endOfValleyIndex) {
    //       totalRain += height[startOfValleyIndex] - height[i];
    //       continue;
    //     }
    //     if (startOfValleyIndex && height[i] >= height[startOfValleyIndex]) {
    //       startOfValleyIndex = null;
    //       endOfValleyIndex = null;
    //     }
    //     continue
  }
};
