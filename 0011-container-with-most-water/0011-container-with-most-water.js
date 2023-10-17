/**
 * @param {number[]} height
 * @return {number}
 */

// two pointer strategy comparing two ends, i/j, going until both ends meet/cross (i > j)
// calculate water contained between those two ends, ignoring any walls in between
// because we're only looking for two lines that contain the most water between them
// update max water if larger is found
// then increment/decrement i or j if that wall is smaller

var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    
    while (i < j) {
        const water = Math.min(height[i], height[j]) * (j - i);
        max = Math.max(max, water);
        
        height[i] < height[j] ? i++ 
                              : j--;
    }
    
    return max;
};