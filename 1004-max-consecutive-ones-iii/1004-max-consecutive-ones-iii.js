/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i = 0;
    let j = 0;
    let flipped = [];
    let max = 0;
    let current = 0;
    
    while (j < nums.length) {
        if (nums[j] === 1) {
            current++;
        } else {
            if (k === 0) {
                current = 0;
            } else if (flipped.length === k) {
                i = flipped.shift();
                current = j - i;
                flipped.push(j);
            } else {
                current++;
                flipped.push(j);
            }
        }
        
        max = Math.max(max, current);
        j++;
    }
    
    return max;
};