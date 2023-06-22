/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    let max = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) max++;
    }
    
    let current = max;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) current++;
        if (vowels.has(s[i-k])) current--;
        
        if (current > max) max = current;
    }
    
    return max
};