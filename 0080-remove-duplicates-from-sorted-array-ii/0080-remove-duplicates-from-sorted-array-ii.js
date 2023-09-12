/**
 * @param {number[]} nums
 * @return {number}
 */

// two pointer strategy
// fill the starting k numbers in the nums array,
// by swapping current position k with the next non duplicate,
// and incrementing to the next k position
// always increment j, but don't swap if nums[j] same as last 2 numbers before k
var removeDuplicates = function(nums) {
    let j = 0;
    let k = 0;
    
    while (j < nums.length) {
        if (nums[j] !== nums[k-2]) {
            [nums[k], nums[j]] = [nums[j], nums[k]];
            k++;
        }
        j++;
    }
    
    return k;
};