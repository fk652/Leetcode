/**
 * @param {number[]} height
 * @return {number}
 */

// two pointer strategy comparing two ends
// calculate water contained between those two ends, ignoring any walls in between
// update max water if larger is found
// then incrementing/decrementing i/j if that wall is smaller
// function ends once both ends meet/cross

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