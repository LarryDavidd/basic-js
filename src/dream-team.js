// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0) return false;
  let namesMassive = [];
  let res = '';
  members.forEach(element => {
    if (typeof element == 'string') {
      namesMassive.push(element.trim()[0]);
    }
  });
  res = namesMassive.sort( (a, b) => a.localeCompare(b) ).join('');
  //   function(a, b) {
  //   return (a.toUpperCase() < b.toUpperCase()) ? -1 : (a.toUpperCase() > b.toUpperCase()) ? 1 : 0;
  // });
  return res.toUpperCase();

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  createDreamTeam
};
