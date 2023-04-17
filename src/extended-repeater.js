const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {

  if (str) {
    str = String(str);
  }

  let res = [];
  let count = [];
  let repeatTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
  let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
  let separator = options.hasOwnProperty("separator") ? options.separator : "+";
  let addition = options.hasOwnProperty("addition") ? String(options.addition) : "";
  let additionSeparator = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : "|";

  for (let i = 0; i < additionRepeatTimes; i++) {
    count.push(addition);
  }

  count = count.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
      res.push(str+count);
  }

  return res.join(separator);

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
