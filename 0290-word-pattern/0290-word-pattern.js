/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// split s into words
// false if there are more words than pattern characters

// go through each pattern char and word at the same indices
// uniquely map each pattern char to a word

// return false when either a new pattern[i] char is found and words[i] is already mapped,
// or when the word mapped to pattern[i] doesn't match the current word[i]

var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    
    const wordMap = {};

    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in wordMap)) {
            if (Object.values(wordMap).includes(words[i])) {
                return false;
            } else {
                wordMap[pattern[i]] = words[i];
            }
        } else if (wordMap[pattern[i]] !== words[i]) {
            return false;
        }
    }

    return true;
};