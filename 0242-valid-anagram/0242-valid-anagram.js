/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// first check compare s and t lengths (invalid anagram if different lengths)
// use a hash to keep track of letter counts
// add 1 for each s char, subtract 1 for each t char
// return if all final counts are 0 (means s and t have same amount of chars)
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const count = {};
    for (let i = 0; i < s.length; i++) {
        s[i] in count ? count[s[i]]++ : count[s[i]] = 1;
        t[i] in count ? count[t[i]]-- : count[t[i]] = -1;
    }
    
    return Object.values(count).every(val => val === 0);
};