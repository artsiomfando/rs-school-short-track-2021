/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const resultArr = names;
  return names.map((el, i, arr) => {
    let num = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === el) {
        num++;
        resultArr.splice(j, 1, `${arr[j]}(${num})`);
      }
    }
    return resultArr[i];
  });
}

module.exports = renameFiles;
