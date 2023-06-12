/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = [];
    
    let i = 0;
    let j = nums.length - 1;
    
    while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            result.push(nums[i]**2);
            i++;
        } else {
            result.push(nums[j]**2);
            j--;
        }
    }
    
    return result.reverse();
};