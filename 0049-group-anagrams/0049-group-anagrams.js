/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// group up the anagrams together in an object,
// by sorting each str's characters, using it as the key,
// and grouping similar anagrams together under the same key
var groupAnagrams = function(strs) {
    const groups = {};

    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        sorted in groups ? groups[sorted].push(str)
                         : groups[sorted] = [str];
    }

    return Object.values(groups);
};