/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// bottom up dp approach
// O(n*m) solution
var minDistance = function(word1, word2) {
    // setting up the n*m table with base values on 1st row and 1st column
    // dp[0][0] is comparing empty strings
    const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1));  
    for (let i = 0; i <= word1.length; i++) dp[i][0] = i;
    for (let j = 0; j <= word2.length; j++) dp[0][j] = j;
    
    // going through each i, j index pair of word1 and word2 respectively
    // dp[i][j] represents the min edits solved up to those parts of the strings
    // so dp[i-1][j-1] represents the previous min edit of the characters before
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            // actual index in word is offset -1 since dp[0][0] is empty strings
            // if char are the same then no edit needed, so keep previous dp[i-1][j-1]
            // else get the min of the previous, top, and left of the table
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[word1.length][word2.length];
};