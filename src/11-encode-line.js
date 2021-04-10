/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const resultArr = [0];
  const result = [];

  for (let j = 0; j < str.length; j++) {
    if (str[j] !== str[j + 1]) resultArr.push(j + 1);
  }

  /* [...str].map((el, i, arr) => {
    if (el !== arr[i + 1]) resultArr.push(i + 1);
  }); */

  for (let i = 1; i < resultArr.length; i++) {
    result.push(resultArr[i] - resultArr[i - 1] + [...str][resultArr[i - 1]]);
  }
  return result.join('').replace(/1/g, '');
}

module.exports = encodeLine;
