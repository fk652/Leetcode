/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const leftSums = [0];
    const rightSums = [0];
    
    for (let i = 0; i < nums.length; i++) {
        leftSums.push(leftSums[leftSums.length-1] + nums[i]);
        rightSums.push(rightSums[rightSums.length-1] + nums[nums.length - 1 - i]);
    }
    
    for (let i = 1; i <= nums.length; i++) {
        if (leftSums[i-1] === rightSums[rightSums.length-1-i]) return i-1;
    }
    
    return -1;
};