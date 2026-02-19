export function solve_board(row, col, board) {
  if (row === 9) return true;
  if (col === 9) return solve_board(row + 1, 0, board);

  if (board.cells[row][col].def) {
    return solve_board(row, col + 1, board);
  }

  for (let num = 1; num <= 9; num++) {
    if (board.check_validity(row, col, num)) {
      board.cells[row][col].number = num;

      if (solve_board(row, col + 1, board)) return true;

      board.cells[row][col].number = 0;
    }
  }

  return false;
}
