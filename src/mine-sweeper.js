const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, i) =>
    row.map((kek, j) => countAdjacentMines(matrix, i, j))
  );
}

function countAdjacentMines(matrix, row, col) {
  return [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ].reduce((count, [dx, dy]) => count + hasMine(matrix, row + dx, col + dy), 0);
}

function hasMine(matrix, row, col) {
  return isValidCell(matrix, row, col) ? matrix[row][col] : 0;
}

function isValidCell(matrix, row, col) {
  return (
    row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length
  );
}

module.exports = {
  minesweeper,
};
