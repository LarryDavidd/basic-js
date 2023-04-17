const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';

  try {
    (new Date(date.getTime())).getMonth();
  } catch {
    throw new Error('Invalid date!');
  }
  let month = date.getMonth();
  // console.log(month)

  if ((month == 11) || (month == 0) || (month == 1)) return 'winter';
  if ((month == 3) || (month == 4) || (month == 2)) return 'spring';
  if ((month == 6) || (month == 7) || (month == 5)) return 'summer';
  if ((month == 9) || (month == 10) || (month == 8)) return 'fall';

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getSeason(new Date(2020, 12, 31)));

module.exports = {
  getSeason
};
