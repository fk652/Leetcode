/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const letterCount = {};
    for (let i = 0; i < s.length; i++) {
        s[i] in letterCount ? letterCount[s[i]]++ : letterCount[s[i]] = 1;
        t[i] in letterCount ? letterCount[t[i]]-- : letterCount[t[i]] = -1;
    }
    
    for (let count of Object.values(letterCount)) {
        if (count !== 0) return false;
    }
    return true;
};