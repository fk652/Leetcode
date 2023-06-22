/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    
    let currentSum = maxSum;
    let i = 0;
    for (let j = k; j < nums.length; j++) {
        currentSum = currentSum - nums[i] + nums[j];
        if (currentSum > maxSum) maxSum = currentSum;
        i++;
    }
    
    return maxSum / k;
};