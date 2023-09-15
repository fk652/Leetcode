/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// map the highest index found for each number,
// since we need to find the first smallest difference of i - j <= k
// go from start to end to find matching numbers that satisfy the condition
var containsNearbyDuplicate = function(nums, k) {
    const indexMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in indexMap && i - indexMap[nums[i]] <= k) {
            return true;
        }
        
        indexMap[nums[i]] = i;
    }

    return false;
};