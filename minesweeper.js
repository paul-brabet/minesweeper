document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: true, hidden: true, isMarked: false, surroundingMines: 0},
    {row: 0, col: 1, isMine: false, hidden: true, isMarked: false, surroundingMines: 1},
    {row: 0, col: 2, isMine: false, hidden: true, isMarked: false, surroundingMines: 0},
    {row: 1, col: 0, isMine: false, hidden: true, isMarked: false, surroundingMines: 1},
    {row: 1, col: 1, isMine: false, hidden: true, isMarked: false, surroundingMines: 1},
    {row: 1, col: 2, isMine: false, hidden: true, isMarked: false, surroundingMines: 0},
    {row: 2, col: 0, isMine: false, hidden: true, isMarked: false, surroundingMines: 0},
    {row: 2, col: 1, isMine: false, hidden: true, isMarked: false, surroundingMines: 0},
    {row: 2, col: 2, isMine: false, hidden: true, isMarked: false, surroundingMines: 0}
  ]
};

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < 9; i++) {
    var surroundingMines = countSurroundingMines(board.cells[i])
  };
  lib.initBoard();
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var k = 0; k < board.cells.length; k++) {
    if (board.cells[k].isMine && !board.cells[k].isMarked) {
      return
    }
    else if (board.cells[k].hidden && !board.cells[k].isMine) {
      return
    }
  };
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;

  for (var j = 0; j < surrounding.length; j++) {
    if (surrounding[j].isMine) {
      count++
      return count;
    }
  }
}
