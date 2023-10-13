/**
 * @param {string} s
 * @return {boolean}
 */

// use a stack to keep track of opening parantheses characters
// iterate through all the parantheses characters in the string
// pop off the top of the stack when a closing parantheses is encountered
// if not a valid parantheses pair, return false
// at the end return if stack is empty or not 
// valid when all parantheses were matched, leaving the stack empty

var isValid = function(s) {
    const paraMap = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    const paraStack = [];
    
    for (const char of s) {
        if (char in paraMap) {
            if (paraStack.pop() !== paraMap[char]) {
                return false;
            }
        } else {
            paraStack.push(char);
        }
    }
    
    return paraStack.length === 0;
};