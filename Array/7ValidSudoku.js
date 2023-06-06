/**
 * 7 - Valid Sudoku
 * Assume: Square Matrix Chart
 * Time - O(n^2) | Space - O(n^2)
 *
 * @param {number} arrOfArr
 * @return {boolean}
 */

const validSudoku = (arrOfArr) => {
  let answer = false;

  let s1 = new Set();
  let s2 = new Set();
  let s3 = new Set();
  let s4 = new Set();
  let s5 = new Set();
  let s6 = new Set();
  let s7 = new Set();
  let s8 = new Set();
  let s9 = new Set();

  let currCellValue;
  for (const i in arrOfArr) {
    var currentRow = new Set();
    for (const j in arrOfArr[i]) {
      currCellValue = arrOfArr[i][j];
      if (currCellValue === ".") continue;
      else currCellValue = parseInt(currCellValue);
      if (currentRow.has(currCellValue)) return answer;
      else {
        currentRow.add(currCellValue);
      }
      console.log(currentRow, i, j);
      if (i <= 2) {
        // First 3 Rows
        if (j <= 2) {
          // First 3 Cols

          if (s1.has(currCellValue)) return answer;
          else {
            s1.add(currCellValue);
            continue;
          }
        }
        if (j <= 5) {
          // Second 3 Cols
          if (s2.has(currCellValue)) return answer;
          else {
            s2.add(currCellValue);
            continue;
          }
        } else if (j <= 8) {
          // Third 3 Cols
          if (s3.has(currCellValue)) return answer;
          else {
            s3.add(currCellValue);
            continue;
          }
        }
      } else if (i <= 5) {
        // Second 3 Rows
        if (j <= 2) {
          // First 3 Cols
          if (s4.has(currCellValue)) return answer;
          else {
            s4.add(currCellValue);
            continue;
          }
        }
        if (j <= 5) {
          // Second 3 Cols
          if (s5.has(currCellValue)) return answer;
          else {
            s5.add(currCellValue);
            continue;
          }
        } else if (j <= 8) {
          // Third 3 Cols
          if (s6.has(currCellValue)) return answer;
          else {
            s6.add(currCellValue);
            continue;
          }
        }
      } else if (i <= 8) {
        // Third 3 Rows
        if (j <= 2) {
          // First 3 Cols
          if (s7.has(currCellValue)) return answer;
          else {
            s7.add(currCellValue);
            continue;
          }
        }
        if (j <= 5) {
          // Second 3 Cols
          if (s8.has(currCellValue)) return answer;
          else {
            s8.add(currCellValue);
            continue;
          }
        } else if (j <= 8) {
          // Third 3 Cols
          if (s9.has(currCellValue)) return answer;
          else {
            s9.add(currCellValue);
            continue;
          }
        }
      }
    }
  }
  // NOW s1 - s9 represent Column groups

  s1.clear();
  s2.clear();
  s3.clear();
  s4.clear();
  s5.clear();
  s6.clear();
  s7.clear();
  s8.clear();
  s9.clear();

  for (const i in arrOfArr) {
    for (const j in arrOfArr[i]) {
      currCellValue = arrOfArr[i][j];
      if (currCellValue === ".") continue;
      else currCellValue = parseInt(currCellValue);

      switch (j) {
        case "0":
          if (s1.has(currCellValue)) return answer;
          else {
            s1.add(currCellValue);
            break;
          }
        case "1":
          if (s2.has(currCellValue)) return answer;
          else {
            s2.add(currCellValue);
            break;
          }
        case "2":
          if (s3.has(currCellValue)) return answer;
          else {
            s3.add(currCellValue);
            break;
          }
        case "3":
          if (s4.has(currCellValue)) return answer;
          else {
            s4.add(currCellValue);
            break;
          }
        case "4":
          if (s5.has(currCellValue)) return answer;
          else {
            s5.add(currCellValue);
            break;
          }
        case "5":
          if (s6.has(currCellValue)) return answer;
          else {
            s6.add(currCellValue);
            break;
          }
        case "6":
          if (s7.has(currCellValue)) return answer;
          else {
            s7.add(currCellValue);
            break;
          }
        case "7":
          if (s8.has(currCellValue)) return answer;
          else {
            s8.add(currCellValue);
            break;
          }
        case "8":
          if (s9.has(currCellValue)) return answer;
          else {
            s9.add(currCellValue);
            break;
          }
        default:
          break;
      }
    }
  }

  answer = true;
  return answer;
};

// MINI FALSE ONE
console.log(
  validSudoku([
    [1, ".", "."],
    [".", 2, "."],
    [".", ".", 3],
    [".", 2, "."],
  ])
);

// TRUE ONE
console.log(
  validSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

// FALSE ONE
console.log(
  validSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

// TRUE ONE 2
console.log(
  validSudoku([
    ["7", ".", ".", ".", "4", ".", ".", ".", "."],
    [".", ".", ".", "8", "6", "5", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "9", ".", ".", "."],
    [".", ".", ".", ".", "5", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);

// SOLUTION BY LEETCODE
// NEED TO INVESTIGATE LATER
