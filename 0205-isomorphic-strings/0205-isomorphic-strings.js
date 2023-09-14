/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// can't be isomorphic if strings are different length

// go through each char at the same indices for s and t
// uniquely map each char in s to a char in t

// return false when either a new s[i] char is found and t[i] is already mapped,
// or when the char mapped to s[i] doesn't match t[i]

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in charMap)) {
            if (Object.values(charMap).includes(t[i])) {
                return false;
            } else {
                charMap[s[i]] = t[i];
            }
        } else if (charMap[s[i]] !== t[i]) {
            return false;
        }
    }

    return true;
};