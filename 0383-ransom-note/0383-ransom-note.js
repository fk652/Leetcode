/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCount = {};
    for (let char of ransomNote) {
        char in letterCount ? letterCount[char]++ : letterCount[char] = 1;
    }
    
    for (let char of magazine) {
        if (char in letterCount) letterCount[char]--;
    }
        
    for (let count of Object.values(letterCount)) {
        if (count > 0) return false;
    }
    return true;
};