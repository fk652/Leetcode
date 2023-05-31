/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIdx = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in numIdx) return [numIdx[diff], i];
        numIdx[nums[i]] = i;
    }
};