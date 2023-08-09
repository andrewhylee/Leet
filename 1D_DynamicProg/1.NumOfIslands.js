/**
 * SO EASY TO UNDERSTAND
 * CUZ ORGANIZED
 * 89% BETTER
 * https://leetcode.com/problems/number-of-islands/solutions/3619981/bfs-dfs-dfs-iterative-queue-stack-recursion/
 */
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let nr = 0;
let nc = 0;

var numIslands = function (grid) {
  if (grid == null || grid.length == 0) return 0;

  nr = grid.length;
  nc = grid[0].length;
  let counter = 0;

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] == "1") {
        counter++;
        // uncomment one of the following lines
        // dfsIterative(grid, r, c);
        // dfs(grid, r, c);
        bfs(grid, r, c);
      }
    }
  }

  return counter;
};

function outOfBounds(grid, r, c) {
  if (r < 0 || c < 0) return true;
  if (r >= nr || c >= nc) return true;
  if (grid[r][c] == "0") return true;
  return false;
}

function bfs(grid, r, c) {
  let queue = [[r, c]];

  while (queue.length > 0) {
    let [r, c] = queue.shift();

    if (outOfBounds(grid, r, c)) continue;

    grid[r][c] = "0";

    for (let d of directions) {
      let newRow = r + d[0],
        newColumn = c + d[1];
      queue.push([newRow, newColumn]);
    }
  }
}

function dfs(grid, r, c) {
  if (outOfBounds(grid, r, c)) return;

  grid[r][c] = "0";

  for (let d of directions) {
    let newRow = r + d[0],
      newColumn = c + d[1];
    dfs(grid, newRow, newColumn);
  }
}

function dfsIterative(grid, r, c) {
  let stack = [[r, c]];

  while (stack.length > 0) {
    let [r, c] = stack.pop();

    if (outOfBounds(grid, r, c)) continue;

    grid[r][c] = "0";

    for (let d of directions) {
      let newRow = r + d[0],
        newColumn = c + d[1];
      stack.push([newRow, newColumn]);
    }
  }
}

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
//     // Edge Case - Early cutoff
//     if(grid.length === 0 || grid[0].length === 0) return 0

//     let result = 2

//     const dfs = (row, col) => {
//         if(grid[row][col] !== "1") return
//         grid[row][col] = result
//         row > 0 && dfs(row-1,col)
//         col > 0 && dfs(row,col-1)
//         row < grid.length-1 && dfs(row+1,col)
//         col < grid[0].length && dfs(row,col+1)
//         return
//     }

//     for (const row in grid){
//         const rowNum = parseInt(row)
//         for (const col in grid[0]){
//             const colNum = parseInt(col)
//             let elementInGrid = grid[rowNum][colNum]
//             if(elementInGrid === "1"){
//                 result++
//                 dfs(rowNum, colNum)
//             }
//         }
//     }

//     return result - 2
// };

/**
 * MY ATTEMPT: 66% BETTER
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // Edge Case - Early cutoff
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let result = 2;

  const dfs = (row, col) => {
    if (grid[row][col] !== "1") return;
    grid[row][col] = result;
    row > 0 && dfs(row - 1, col);
    col > 0 && dfs(row, col - 1);
    row < grid.length - 1 && dfs(row + 1, col);
    col < grid[0].length && dfs(row, col + 1);
    return;
  };

  for (const row in grid) {
    const rowNum = parseInt(row);
    for (const col in grid[0]) {
      const colNum = parseInt(col);
      let elementInGrid = grid[rowNum][colNum];
      if (elementInGrid === "1") {
        result++;
        dfs(rowNum, colNum);
      }
    }
  }

  return result - 2;
};
// ans: 3
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

// ans: 1
console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

// ans: 2
console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ])
);
