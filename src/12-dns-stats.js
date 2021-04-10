/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainObj = {};
  const arr = [];
  domains.forEach((el) => {
    const newEl = el.split('.').reverse();
    for (let j = 1; j <= newEl.length; j++) {
      const dot = '.';
      arr.push(dot.concat(newEl.slice(0, j).join('.')));
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (!domainObj[arr[i]]) {
      domainObj[arr[i]] = arr.filter((el) => el === arr[i]).length;
    }
  }
  return domainObj;
}

module.exports = getDNSStats;
