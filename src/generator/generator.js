import { Board } from "../model/board.js";
import { Difficulty } from "./difficulty.js";
export let start_puzzle = null;

export function generate_board() {
  let board = new Board();

  if (!fill_board(0, 0, board)) {
    console.log("allaki");
  }
  start_puzzle = cloneBoard(board);
  remove_numbers(board);

  return board;
}
function cloneBoard(board) {
  const newBoard = new Board();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const originalCell = board.get_cell(i, j);
      const newCell = newBoard.get_cell(i, j);
      newCell.number = originalCell.number;
      newCell.active = originalCell.active;
    }
  }
  return newBoard;
}

function fill_board(row, col, board) {
  if (row === 9) return true;
  if (col === 9) return fill_board(row + 1, 0, board);

  const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (const num of numbers) {
    if (board.check_validity(row, col, num)) {
      board.cells[row][col].number = num;
      board.cells[row][col].active = true;

      if (fill_board(row, col + 1, board)) return true;
    }
  }

  board.cells[row][col].number = 0;
  board.cells[row][col].active = false;
  return false;
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function remove_numbers(board) {
  let diff = new Difficulty();
  const used = Array.from({ length: 9 }, () => Array(9).fill(false));

  let i = 0;
  while (i < diff.get_easy()) {
    let row = getRandom0to8();
    let col = getRandom0to8();
    if (used[row][col] == false) {
      used[row][col] = true;
      board.cells[row][col].number = 0;
      board.cells[row][col].active = false;
      i++;
    }
  }
}
function getRandom0to8() {
  return Math.floor(Math.random() * 9);
}

export function check_puzzle(row, col, num) {
  return start_puzzle.cells[row][col].number == num;
}
