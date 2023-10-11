/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// use binary search to find the start and end positions
// need to run it twice to find the start and end

// to find start position, keep going until high < low
// when mid === target, search left half
// return final high + 1

// to find end position, keep going until low > high
// when mid === target, search right half
// return final low - 1

// if the number at the returned start/end position is not the target, 
// then target doesn't exist in the array, so return [-1, -1]

var searchRange = function(nums, target) {
    if (!nums.length) return [-1, -1];

    const start = searchHelper(nums, target, true);
    if (nums[start] !== target) return [-1, -1];
    const end = searchHelper(nums, target, false);
    return [start, end];
};

var searchHelper = function(nums, target, isStart) {
    low = 0;
    high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if ((isStart && nums[mid] < target) || (!isStart && nums[mid] <= target)) {
            low = mid + 1;
        } else if ((isStart && nums[mid] >= target) || (!isStart && nums[mid] > target)) {
            high = mid-1;
        }
    }

    return (isStart ? high + 1 : low - 1);
}