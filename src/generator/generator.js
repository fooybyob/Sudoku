import { Board } from "../model/board.js";

export function generate_board() {
  //let amount_to_remove = Difficulty.get_easy();
  let board = new Board();

  diag_generation(0, 3, 0, 3, board);
  fill_square(0, 3, 3, 6, board);
  fill_square(0, 3, 6, 9, board);

  diag_generation(3, 6, 3, 6, board);
  fill_square(3, 6, 0, 3, board);
  fill_square(3, 6, 6, 9, board);

  diag_generation(6, 9, 6, 9, board);
  fill_square(6, 9, 0, 3, board);
  fill_square(6, 9, 3, 6, board);

  return board;
}

function fill_square(rl, rr, cl, cr, board) {
  for (let i = rl; i < rr; i++) {
    for (let j = cl; j < cr; j++) {
      let randomNumber = getRandom1to9();
      while (!board.check_validity(i, j, randomNumber)) {
        randomNumber = getRandom1to9();
      }
      board.cells[i][j].number = randomNumber;
    }
  }
}

function getRandom1to9() {
  return Math.floor(Math.random() * 9) + 1;
}
