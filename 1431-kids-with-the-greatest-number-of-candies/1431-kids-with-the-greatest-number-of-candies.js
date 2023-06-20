/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    
    const result = [];
    for (let count of candies) {
        result.push(count + extraCandies >= max)
    }
    return result;
};