/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// map the highest index found for each number,
// since we need to find the first smallest difference of i - j <= k
// go through increasing index, so i is always > whatever j is mapped
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