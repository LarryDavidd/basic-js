const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    if (Array.isArray(arr)) {
      let depthCount = 0;
      for (let i = 0; i < arr.length; i++) {
        let depth = this.calculateDepth(arr[i]);
        if (depth > depthCount) {
          depthCount = depth;
        }
      }
      return depthCount + 1;
    } else {
      return 0;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
