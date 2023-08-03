/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((sum, ele) => sum + ele);
    if (sum % 2 !== 0) return false;
    
    return findSubset(nums, nums.length - 1, sum/2, {});
};

function findSubset(nums, i, sum, memo) {
    if (sum === 0) return true;
    if (i < 0 && sum !== 0) return false;
    
    const key = `${i} ${sum}`;
    if (key in memo) return memo[key];
    
    // no need to save in memo if nums[i] bigger than current sum
    if (nums[i] > sum) {
        return findSubset(nums, i-1, sum, memo);
    }
 
    const excludeI = findSubset(nums, i-1, sum, memo);
    const includeI = findSubset(nums, i-1, sum - nums[i], memo);
    return memo[key] = excludeI || includeI;
}