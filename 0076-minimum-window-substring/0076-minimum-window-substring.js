/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const charCount = countLetters(t);
    
    let minLength = s.length + 1;
    let minLeft = -1;
    let remaining = t.length;
    let i = 0;
    
    for (let j = 0; j < s.length; j++) {
        if (s[j] in charCount) {
            charCount[s[j]]--;
            
            if (charCount[s[j]] >= 0) {
                remaining--;
            }
        }
        
        while (remaining === 0) {
            const length = j - i + 1;
            if (length < minLength) {
                minLength = length
                minLeft = i;
            }
            
            if (s[i] in charCount) {
                charCount[s[i]]++;
                
                if (charCount[s[i]] > 0) {
                    remaining++;
                }
            }
            
            i++;
        }
    }
    
    return minLeft === -1 ? '' : s.substring(minLeft, minLeft + minLength);
};

var countLetters = function(str) {
    const charCount = {};
    
    for (const char of str) {
        char in charCount ? charCount[char]++ : charCount[char] = 1;
    }
    
    return charCount;
}