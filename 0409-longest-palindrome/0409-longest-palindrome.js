/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letterCount = {};
    
    for (const char of s) {
        char in letterCount ? letterCount[char]++ : letterCount[char] = 1;
    }
    
    let odd = false;
    let longest = 0;
    for (const count of Object.values(letterCount)) {
        if (count % 2 === 1) {
            odd = true;
            longest += count - 1;
        } else {
            longest += count;
        }
    }
    
    if (odd) longest++;
    return longest;
};