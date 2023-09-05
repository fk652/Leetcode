/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// using top down memoization approach
// i and j keep track of current index in text1 and text2, respectively
// var longestCommonSubsequence = function(text1, text2, i=0, j=0, memo={}) {
//     // base case is when i or j is >= length of the string, nothing in common so return 0
//     if (i >= text1.length || j >= text2.length) return 0;
    
//     // use i and j as the memoization key since those always change each recursion
//     // also same as memoizing the same substring pairs being compared
//     const key = `${i} ${j}`;
//     if (key in memo) return memo[key];
    
//     // if first characters match, find LCS of string without those 2 char and add 1
//     // else find the LCS of text1 excluding i with same text2
//     // and LCS of text2 exlcuding j with same text1
//     // then choose the maximum between those 2 cases
//     if (text1[i] === text2[j]) {
//         memo[key] = 1 + longestCommonSubsequence(text1, text2, i+1, j+1, memo);
//     } else {
//         const excludeI = longestCommonSubsequence(text1, text2, i+1, j, memo);
//         const excludeJ = longestCommonSubsequence(text1, text2, i, j+1, memo);
//         memo[key] = Math.max(excludeI, excludeJ);
//     }
    
//     return memo[key];
// };


// dp approach using O(n*m) table to keep track of previous LCS
// O(n*m) approach going through each combo of substring pairs from START to END
// using i and j to keep track of current index of text1 and text2, respectively
// var longestCommonSubsequence = function(text1, text2) {
//     // initializing the O(n*m) table with all 0
//     const memo = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0));

//     for(let i = 1; i < memo.length; i++) {
//         for(let j = 1; j < memo[i].length; j++) {
//             if (text1[i - 1] === text2[j - 1]) {
//                 memo[i][j] = 1 + memo[i - 1][j - 1];
//             } else {
//                 memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
//             }
//         }
//     }

//     return memo[text1.length][text2.length];
// };

// dp approach keeping track of current and previous rows, to save space
// O(n*m) approach going through each combo of substring pairs from END to START
// using i and j to keep track of current index of text1 and text2, respectively
// only needs to keep track of text2 compared to text1, so dp row length = text2.length
var longestCommonSubsequence = function(text1, text2) {
    let prev = Array(text2.length + 1).fill(0);
    let curr = Array(text2.length + 1).fill(0);

    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                curr[j] = 1 + prev[j + 1];
            } else {
                curr[j] = Math.max(curr[j + 1], prev[j]);
            }
        }

        prev = [...curr];
    }


    return curr[0];
};