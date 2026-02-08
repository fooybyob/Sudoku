import { generate_board, check_puzzle } from "../generator/generator.js";

let board = generate_board();
const boardEl = document.getElementById("board");

const numbersEl = document.getElementById("numbers");
let selectedNumber = null;
for (let n = 1; n <= 9; n++) {
  const btn = document.createElement("button");
  btn.textContent = n;
  btn.addEventListener("click", () => {
    selectedNumber = n;
    console.log("Selected number:", selectedNumber);
    // Optional: highlight selected button
    document
      .querySelectorAll("#numbers button")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
  numbersEl.appendChild(btn);
}

const solve_button = document.createElement("button");
solve_button.classList.add("option-btn");
solve_button.textContent = "Solve Sudoku";

const generate_button = document.createElement("button");
generate_button.classList.add("option-btn");
generate_button.textContent = "Generate Board";

generate_button.onclick = () => {
  board = generate_board();
  render();
};
document.body.appendChild(generate_button);
document.body.appendChild(solve_button);

function render() {
  boardEl.innerHTML = "";

  for (const row of board.get_board()) {
    const rowEl = document.createElement("div");
    rowEl.classList.add("row");

    for (const cell of row) {
      const cellEl = document.createElement("button");
      cellEl.textContent = cell.number ?? "";
      cellEl.classList.toggle("active", cell.active);

      cellEl.addEventListener("click", () => {
        if (selectedNumber !== null && cell.active === false) {
          if (
            board.check_validity(cell.row, cell.column, selectedNumber) &&
            check_puzzle(cell.row, cell.column, selectedNumber)
          ) {
            cell.number = selectedNumber;
            cell.active = true;
            render();
          } else {
            alert("Invalid move!");
          }
        }
      });

      rowEl.appendChild(cellEl);
    }

    boardEl.appendChild(rowEl);
  }
}
render();
