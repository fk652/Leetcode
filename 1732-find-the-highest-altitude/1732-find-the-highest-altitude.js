/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let current = 0;
    for (let diff of gain) {
        current += diff;
        if (current > max) max = current;
    }
    return max;
};