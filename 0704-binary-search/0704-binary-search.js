/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// basic binary search algorithm
// set a low and high pointer to both ends of the array
// keep comparing mid point between low and high to target, until low > high
// return mid if target is found
// if mid < target, check the right half of the remaining array (by setting low = mid + 1)
// otherwise check the left half of the remaining array (by setting high = mid - 1)

// O(log(n)) runtime 
// because we recursively discard half of the array while finding the target in a sorted array

var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    
    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return -1;
};