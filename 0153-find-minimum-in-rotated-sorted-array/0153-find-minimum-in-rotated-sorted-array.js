/**
 * @param {number[]} nums
 * @return {number}
 */

// binary search but we look for the rotation point (highest number before the lowest number)
// the min and highest values are at the rotation point
// go until low and high reach the same point (the min value)
// when mid > high (right half is rotated), then search the right half
// otherwise left half contains the rotation, so search the left half

// but keep mid when searching the left half in case that mid is the lowest point
// because we use Math.floor to round down mid, mid could end up being the min
// so we don't want to accidently discard it when going down into the left half
// or go to a point where there are no numbers left (e.g think about the [1, 2] case)

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