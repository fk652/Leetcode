/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    properties = properties.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);

    let count = 0;
    let prevHighestDefense = -1;

    for (const char of properties) {
        if (char[1] < prevHighestDefense) {
            count++;
        } else {
            prevHighestDefense = char[1];
        }
    }

    return count;
};