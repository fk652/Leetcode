/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count = {};
    for (const num of arr) {
        num in count ? count[num]++ : count[num] = 1;
    }
    
    const occurences = new Set();
    for (let occurence of Object.values(count)) {
        if (occurences.has(occurence)) return false;
        occurences.add(occurence);
    }
    
    return true;
};