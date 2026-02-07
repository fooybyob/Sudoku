export class Cell {
  constructor(row, column, number, active) {
    this.row = row;
    this.column = column;
    this.number = number;
    this.active = active;
  }

  get_active() {
    return this.active;
  }
  set_value(number) {
    this.number = number;
  }
  get_number() {
    return this.number;
  }
}
