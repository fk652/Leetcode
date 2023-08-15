/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const digits = '1234567890';
    const stack = [];
    
    for (const char of s) {
        if (char === ']') {
            let popped = stack.pop();
            let substring = '';
            while (popped !== '[') {
                substring = popped + substring;
                popped = stack.pop();
            }
            
            let repeat = '';
            while(digits.includes(stack[stack.length-1])) {
                repeat = stack.pop() + repeat;
            }
            
            stack.push(substring.repeat(parseInt(repeat)));
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};