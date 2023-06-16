/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parenStack = [];
    
    const closingHash = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char in closingHash && closingHash[char] === parenStack[parenStack.length-1]) {
            parenStack.pop();
        } else {
            parenStack.push(char);   
        }
    }
    
    return parenStack.length === 0;
};