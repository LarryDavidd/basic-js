const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
      this.direct = direct;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    
    let result = [];

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        let strChar = str[i].charCodeAt(0) - 65;
        let keyChar = key[j % key.length].charCodeAt(0) - 65;
        let resChar = (strChar + keyChar) % 26 + 65;
        result.push(String.fromCharCode(resChar));
        j++;
      } else {
        result.push(str[i]);
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    
    let res = [];

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        let strChar = str[i].charCodeAt(0) - 65;
        let keyChar = key[j % key.length].charCodeAt(0) - 65;
        let resChar = (strChar + (26 - keyChar)) % 26 + 65
        res.push(String.fromCharCode(resChar));
        j++;
      } else {
        res.push(str[i]);
      }
    }
    return this.direct ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
