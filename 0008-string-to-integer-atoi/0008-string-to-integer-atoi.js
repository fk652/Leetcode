/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let start = 0;
    let end = -1;
    let negative = false;
    
    for (let i = 0; i < s.length; i++) {
        start = i;
        if (s[i] !== ' ') break;
    }
    
    if (s[start] === '-' || s[start] === '+') {
        negative = (s[start] === '-');
        start++;
    }
    
    for (let i = start; i < s.length; i++) {
        if (!s[i].match(/[0-9]/)) break;
        end = i;
    }
    
    if (end === -1) return 0;
    
    let result = parseInt(s.slice(start, end+1));
    if (negative) result *= -1;
    
    const lowerBounds = -(2**31);
    if (result < lowerBounds) return lowerBounds;
    
    const upperBounds = (2**31) - 1;
    if (result > upperBounds) return upperBounds;
    
    return result;
};