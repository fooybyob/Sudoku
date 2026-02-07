import { Cell } from "./cell.js";

export class Board {
  constructor() {
    this.rows = 9;
    this.columns = 9;
    this.cells = [];

    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        const cell = new Cell(i, j, 0, false);
        row.push(cell);
      }
      this.cells.push(row);
    }
  }
  get_cell(row, col) {
    return this.cells[row][col];
  }
  set_cell(row, col, num) {
    this.cells[row][col].active = true;
    this.cells[row][col].number = num;
  }
  get_board() {
    return this.cells;
  }
  check_row(r, number) {
    for (let i = 0; i < 9; i++) {
      if (this.get_cell(r, i).number == number) {
        return false;
      }
    }
    return true;
  }
  check_column(c, number) {
    for (let i = 0; i < 9; i++) {
      if (this.get_cell(i, c).number == number) {
        return false;
      }
    }
    return true;
  }
  check_square(r, c, number) {
    if (r >= 0 && r < 3 && c >= 0 && c < 3) {
      return this.check_one_square(0, 3, 0, 3, number);
    } else if (r >= 0 && r < 3 && c >= 3 && c < 6) {
      return this.check_one_square(0, 3, 3, 6, number);
    } else if (r >= 0 && r < 3 && c >= 6 && c < 9) {
      return this.check_one_square(0, 3, 6, 9, number);
    } else if (r >= 3 && r < 6 && c >= 0 && c < 3) {
      return this.check_one_square(3, 6, 0, 3, number);
    } else if (r >= 3 && r < 6 && c >= 3 && c < 6) {
      return this.check_one_square(3, 6, 3, 6, number);
    } else if (r >= 3 && r < 6 && c >= 6 && c < 9) {
      return this.check_one_square(3, 6, 6, 9, number);
    } else if (r >= 6 && r < 9 && c >= 0 && c < 3) {
      return this.check_one_square(6, 9, 0, 3, number);
    } else if (r >= 6 && r < 9 && c >= 3 && c < 6) {
      return this.check_one_square(6, 9, 3, 6, number);
    } else if (r >= 6 && r < 9 && c >= 6 && c < 9) {
      return this.check_one_square(6, 9, 6, 9, number);
    }
  }
  check_one_square(rl, rr, cl, cr, number) {
    for (let i = rl; i < rr; i++) {
      for (let j = cl; j < cr; j++) {
        if (this.cells[i][j].number == number) {
          return false;
        }
      }
    }
    return true;
  }

  check_validity(r, c, number) {
    return (
      this.check_row(r, number) &&
      this.check_column(c, number) &&
      this.check_square(r, c, number)
    );
  }
}
