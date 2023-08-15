/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let longest = 0;
    let l = 0;
    let lastZero = null;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (lastZero !== null) l = lastZero + 1;
            lastZero = i;
        }
        
        longest = Math.max(longest, i - l);
    }
    
    return longest;
};