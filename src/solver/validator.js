import { check_puzzle } from "../generator/generator.js";

export function validator_board(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        board.check_validity(i, j, board.cells[i][j].number) &&
        check_puzzle(i, j, board.cells[i][j].number)
      ) {
        board.cells[i][j].active = true;
      } else {
        return false;
      }
    }
  }
  return true;
}
