// 21% speed - just an ok result
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length <= 2) return board;
  const top = 0;
  const right = board[0].length - 1;
  const left = 0;
  const bottom = board.length - 1;

  function dfs(r, c) {
    if (board[r][c] === "O") board[r][c] = "I";
    else return;

    r > top && dfs(r - 1, c);
    c > left && dfs(r, c - 1);
    r < bottom && dfs(r + 1, c);
    c < right && dfs(r, c + 1);
    return;
  }

  function changeLettersToFinalForm() {
    // O -> X, I -> O
    for (let r = 0; r <= bottom; r++) {
      for (let c = 0; c <= right; c++) {
        if (board[r][c] === "O") board[r][c] = "X";
        else if (board[r][c] === "I") board[r][c] = "O";
        // if "X", then just skip pass it
      }
    }
  }

  for (let r = 0; r <= bottom; r++) {
    if (r > top && r < bottom) {
      if (board[r][left] === "O") dfs(r, left);
      if (board[r][right] === "O") dfs(r, right);
    } else {
      for (let c = 0; c <= right; c++) {
        if (board[r][c] === "O") dfs(r, c);
      }
    }
  }

  console.log("board: ", board);
  changeLettersToFinalForm();

  return board;
};
