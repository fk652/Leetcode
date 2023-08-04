/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, i = 0, memo = {}) {
    if (i in memo) return memo[i];
    if (i === s.length) return true;
    
    for (let j = i+1; j <= s.length; j++) {
        if (wordDict.includes(s.substring(i, j)) && wordBreak(s, wordDict, j, memo)) {
            memo[i] = true;
            return memo[i];
        }
    }
    
    memo[i] = false;
    return memo[i];
};