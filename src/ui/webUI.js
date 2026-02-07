import { Board } from "../model/board.js";
import { generate_board } from "../generator/generator.js";

const board = generate_board();
const boardEl = document.getElementById("board");

function render() {
  boardEl.innerHTML = "";

  for (const row of board.get_board()) {
    const rowEl = document.createElement("div");
    rowEl.classList.add("row");

    for (const cell of row) {
      const cellEl = document.createElement("button");

      cellEl.textContent = cell.number ?? "";
      cellEl.className = cell.active ? "active" : "";

      cellEl.onclick = () => {
        cell.number = 1;
        cell.active = true;
        render();
      };

      rowEl.appendChild(cellEl);
    }

    boardEl.appendChild(rowEl);
  }
}

render();
