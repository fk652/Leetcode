/**
 * @param {string} s
 * @return {number}
 */

// keep track of current word length and last found word length
var lengthOfLastWord = function(s) {
    let currentLength = 0;
    let last = null;
    
    for (const char of s) {
        if (char === ' ') {
            currentLength = 0;
        } else {
            currentLength++;
            last = currentLength;
        }
    }
    
    return last;
};