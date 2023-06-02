/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let currSubstr = new Set();
    
    for (let i = 0; i <= s.length; i++) {
        longest = Math.max(longest, currSubstr.size);
        
        if (currSubstr.has(s[i])) {
            const entries = currSubstr.entries();
            for (const [char, _] of entries) {
                currSubstr.delete(char);
                if (char === s[i]) break;
            }
        }
        
        currSubstr.add(s[i])
    }
    
    return longest;
};