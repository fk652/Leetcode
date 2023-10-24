/**
 * @param {number[]} nums
 * @return {number}
 */

// binary search but we look for the rotation point (highest number before the lowest number)
// the min and highest values are at the rotation point
// go until low and high reach the same point (the min value)
// when mid > high (right half is rotated), then search the right half
// otherwise left half contains the rotation, so search the left half
// but keep mid when searching the left half
// return nums[high] or nums[low] since that'll be the min point

var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return nums[high];
};