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
  const lengthRow = matrix[0].length;
  const newMatrix = matrix.flat().map((_, i, arr) => {
    const neighbours = [
      arr[i - 1],
      arr[i + 1],
      arr[i - lengthRow],
      arr[i - lengthRow - 1],
      arr[i - lengthRow >= 0 ? i - lengthRow + 1 : false],
      arr[i + lengthRow],
      arr[i + lengthRow < arr.length ? i + lengthRow - 1 : false],
      arr[i + lengthRow + 1],
    ];
    return neighbours.filter((e) => e === true).length;
  });

  const resultArray = [];
  for (let j = 0; j < newMatrix.length / lengthRow; j++) {
    resultArray[j] = newMatrix.slice(j * lengthRow, j * lengthRow + lengthRow);
  }
  return resultArray;
}

module.exports = minesweeper;
