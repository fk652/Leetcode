/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n, low=0) {
    const mid = Math.floor((n + low) / 2);
    const result = guess(mid);
    
    if (result === 0) {
        return mid;
    } else if (result === -1) {
        return guessNumber(mid-1, low);
    } else {
        return guessNumber(n, mid+1);
    }
};