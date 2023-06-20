/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];
    const pairs = {
        'B': 'A',
        'D': 'C'
    }
    
    for (let i = 0; i < s.length; i++) {
        if (pairs.hasOwnProperty(s[i]) &&
            stack[stack.length - 1] === pairs[s[i]]
        ) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.length;
};