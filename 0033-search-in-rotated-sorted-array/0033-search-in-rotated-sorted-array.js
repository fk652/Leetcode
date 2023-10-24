/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// binary search with an extra twist
// if mid === target, return mid (same as regular b-search)
// also ends loops the same once low > high

// if low <= mid (left half is sorted and unrotated)
// search the unrotated left half if target is within it's boundaries
// otherwise search the rotated right half

// else low > mid (right half is sorted and unrotated)
// search the unrotated right half if target is within it's boundaries
// otherwise search the rotated left half

// if target was never found in b-search, return -1

var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target <= nums[high] && nums[mid] <= target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    
    return -1;
};