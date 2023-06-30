/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largest = -Infinity;
    let currentSum = 0;
    
    for (const num of nums) {
        if (num > currentSum && currentSum < 0) {
            currentSum = num;
        } else {
            currentSum += num;
        }
        
        largest = Math.max(largest, currentSum);
    }
    
    return largest;
};