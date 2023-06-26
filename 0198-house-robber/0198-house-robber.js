/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i = 0, memo = {}) {
    if (i in memo) return memo[i];
    
    if (i >= nums.length) return 0;
    
    const withI = nums[i] + rob(nums, i+2, memo);
    const withoutI = rob(nums, i+1, memo);
    
    memo[i] = Math.max(withI, withoutI);
    return memo[i];
};