/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// sort nums by absolute values
// want to flip as many large negative numbers as we can
// any remainder flips can be used on the smallest number
// add up the sum as we go through all the numbers from largest to smallest
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    let maxSum = 0;
    
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] < 0 && k > 0) {
            nums[i] *= -1;
            k--;
        }
        maxSum += nums[i];
    }
    
    if (k > 0 && k % 2 === 1) {
        nums[0] *= -1
    }
    maxSum += nums[0];
    
    return maxSum;
};