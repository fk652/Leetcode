/**
 * @param {number[]} nums
 * @return {string[]}
 */

// There is one incorrect test case, input = [2, -1]
// which shouldn't exist according to the constraint:
// "nums is sorted in ascending order"
// so Math.abs() is needed for nums[j] - nums[j-1]

// use i to keep track of a starting range num
// if current - prev number > 1 then add the range,
// and make i = current number to start a new range
// also format string based on range length
var summaryRanges = function(nums) {
    const ranges = [];
    let i = 0;
    
    for (let j = 1; j <= nums.length; j++) {
        if (Math.abs(nums[j] - nums[j-1]) > 1 || j === nums.length) {
            if (i === j-1) {
                ranges.push(`${nums[i]}`);
            } else {
                ranges.push(`${nums[i]}->${nums[j-1]}`);
            }

            i = j;
        }
    }
    
    return ranges;
};