const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return Math.max(
    ...Array.from(String(n), (kek, i) =>
      parseInt(String(n).slice(0, i) + String(n).slice(i + 1))
    )
  );
}

module.exports = {
  deleteDigit,
};
