/**
 * @param {string} s
 * @return {number}
 */

// simply keep track of current word length and last found word length
var lengthOfLastWord = function(s) {
    let currentLength = 0;
    let last = null;
    
    for (const char of s) {
        if (char === ' ') {
            if (currentLength > 0) last = currentLength;
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    
    // if no space at the end, return current word length
    // else return last found word length
    return currentLength > 0 ? currentLength : last;
};