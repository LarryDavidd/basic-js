const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  for (const char of s1) {
    if (s2.indexOf(char) !== -1) {
      count++;
      s2 =
        s2.substring(0, s2.indexOf(char)) + s2.substring(s2.indexOf(char) + 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
