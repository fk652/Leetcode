/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = -1;
    for (let count of candies) {
        if (count > max) max = count;
    }
    
    const result = [];
    for (let count of candies) {
        result.push(count + extraCandies >= max)
    }
    return result;
};