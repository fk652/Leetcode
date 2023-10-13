/**
 * @param {string[]} tokens
 * @return {number}
 */

// use a stack to keep track of expression results and apply operations in order
// go through each token, adding numbers to the top of the stack
// for operations, pop out the top 2 numbers (num2 comes before num1 in a stack)
// then apply the operation to both numbers and push the result to the top
// in the end only one number representing the final result remains

// also need to convert number strings to integers (using Number() or parseInt())
// for division, we need to truncate the result to zero (using Math.trunc())

var evalRPN = function(tokens) {
    const stack = [];
    const operations = new Set(["*", "/", "+", "-"]);
    
    for (const token of tokens) {
        if (operations.has(token)) {
            const num2 = stack.pop();
            const num1 = stack.pop();

            if (token === "+") {
                stack.push(num1 + num2);
            } else if (token === "-") {
                stack.push(num1 - num2);
            } else if (token === "*") {
                stack.push(num1 * num2);
            } else {
                stack.push(Math.trunc(num1 / num2));
            }
        } else {
            stack.push(Number(token));
        }
    }
    
    return stack[0];
};