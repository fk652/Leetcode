/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// use binary search to find the target or insert point
// which involves comparing mid point to target
// repeat in the left half if target < mid
// or repeat in the right half if target > mid
// O(log(n)) complexity because we keep halving the array to find the target

// for finding insert position, we keep track of a high and low index
// as we keep halving, high will eventually be <= low
// which is the highest position to insert the number in
// high index will be 1 below the insert position

// if mid never equals target, return the insert position

var searchInsert = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    
    while (high >= low) {
        const mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return high + 1;
};