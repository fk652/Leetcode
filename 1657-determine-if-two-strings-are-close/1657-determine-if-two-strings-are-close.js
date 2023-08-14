/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    let count1 = {};
    for (const char of word1) {
        char in count1 ? count1[char]++ : count1[char] = 1;
    }
    
    let count2 = {};
    for (const char of word2) {
        char in count2 ? count2[char]++ : count2[char] = 1;
    }
    
    const count1Freq = String(Object.values(count1).sort((a,b) => a - b));
    const count2Freq = String(Object.values(count2).sort((a,b) => a - b));
    
    if (count1Freq !== count2Freq) return false;
    
    for (const key in count1) {
        if (!(key in count2)) return false;
    }
    
    return true;
};