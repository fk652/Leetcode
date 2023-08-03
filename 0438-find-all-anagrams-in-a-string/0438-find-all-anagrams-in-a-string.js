/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let count = charCount(p);
    const result = [];
    let remaining = p.length;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in count) {
            count[char]--;
            if (count[char] >= 0) remaining--;
        }
        
        if (i >= p.length) {
            const lastChar = s[i - p.length];
            if (lastChar in count) {
                count[lastChar]++
                if (count[lastChar] > 0) remaining++;
            }
        }
        
        if (remaining === 0) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
};

var charCount = function(str) {
    const count = {};
    
    for (const char of str) {
        char in count ? count[char]++ : count[char] = 1;
    }
    
    return count;
}