/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// using top down memoization approach
// i and j keep track of current index in text1 and text2, respectively
var longestCommonSubsequence = function(text1, text2, i=0, j=0, memo={}) {    
    // use i and j as the memoization key since those always change each recursion
    // also same as memoizing the same substring pairs being compared
    const key = `${i} ${j}`;
    if (key in memo) return memo[key];
    
    // base case is when i or j is >= length of the string, nothing in common so return 0
    if (i >= text1.length || j >= text2.length) return 0;
    
    // if first characters match, find LCS of string without those 2 char and add 1
    // else find the LCS of text1 excluding i with same text2
    // and LCS of text2 exlcuding j with same text1
    // then choose the maximum between those 2 cases
    if (text1[i] === text2[j]) {
        memo[key] = 1 + longestCommonSubsequence(text1, text2, i+1, j+1, memo);
    } else {
        const excludeI = longestCommonSubsequence(text1, text2, i+1, j, memo);
        const excludeJ = longestCommonSubsequence(text1, text2, i, j+1, memo);
        memo[key] = Math.max(excludeI, excludeJ);
    }
    
    return memo[key];
};