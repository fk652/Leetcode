/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, low = 0, high = nums.length) {
    const mid = Math.floor((low + high) / 2);
    
   if (nums[mid] > (nums[mid-1] || -Infinity) && nums[mid] > (nums[mid+1] || -Infinity)) {
        return mid;
    } else if ((nums[mid+1] || -Infinity) > nums[mid]) {
        return findPeakElement(nums, mid+1, high);
    } else {
        return findPeakElement(nums, low, mid-1);
    }
};