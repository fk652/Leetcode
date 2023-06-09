/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let result = '';
    let i = 0;
    let j = letters.length - 1;
    
    while (i <= j) {
        const mid = Math.floor((i + j)/2);
        if (letters[mid] > target) {
            result = letters[mid];
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    
    return result || letters[0];
};