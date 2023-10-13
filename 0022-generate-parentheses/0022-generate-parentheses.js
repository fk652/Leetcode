/**
 * @param {number} n
 * @return {string[]}
 */

// generate all unique permutations using a queue
// take the current queue and add parantheses to each item to build the next level
// can either enclose, or add closed pair to the left and right
// make sure that enclose, left, and right results are unique from each other
// O(n!) runtime for slowly building up permutations from the n-1 solution
// var generateParenthesis = function(n) {
//     let queue = [""];
//
//     for (let i = 0; i < n; i++) {
//         const n = queue.length;
//         for (let j = 0; j < n; j++) {
//             const curr = queue.shift();
//             const enclose = "(" + curr + ")";
//             queue.push(enclose);
//
//             const left = "()" + curr;
//             if (left !== enclose) queue.push(left);
//
//             const right = curr + "()";
//             if (left !== right) queue.push(right);
//         }
//     }
//
//     return queue;
// };



// recursive solution
// use i and j to keep track or current amount of open and closed parantheses
// also a string of the current parantheses combo
// base case is when we have n amount of open and closed parantheses
// generates all combinations by making 2 recursive calls,
// incrementally adding one open and one closed parantheses to current
// also make sure amount of closed < open to avoid invalid parantheses
// O(2^n) runtime for building up whole combos of n parantheses
var generateParenthesis = function(n) {
    const result = [];

    const genHelper = function(i, j, curr) {
        if (i === n && j === n) {
            result.push(curr);
            return;
        }
        
        if (i < n) genHelper(i+1, j, curr + "(");
        if (j < i) genHelper(i, j+1, curr + ")");
    }

    genHelper(0, 0, "");
    return result;
};