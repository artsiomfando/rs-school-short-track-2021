/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const arrIndex = [];
  arr.forEach((el, i) => {
    if (el === -1) arrIndex.push(i);
  });
  const newArr = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  arrIndex.forEach((el) => newArr.splice(el, 0, -1));
  return newArr;
}

module.exports = sortByHeight;
